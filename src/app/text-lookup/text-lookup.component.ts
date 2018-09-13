import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
interface IWordsAPIResponse {
  synonyms: string[];
  word: string;
  doSomefin: Function;
}

@Component({
  selector: 'app-text-lookup',
  templateUrl: './text-lookup.component.html',
  styleUrls: ['./text-lookup.component.css']
})
export class TextLookupComponent implements OnInit, OnChanges {

  @Input() text = '';
  @Output() replacement = new EventEmitter<string>();

  santizedText: string = '';
  results: string[] = [];
  loading: boolean = false;

  _inDblClick: boolean = false;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue } = changes.text;
    if (currentValue) {
      this.loading = true;
      this.doAPILookup(currentValue);
    }
  }

  doAPILookup(text: string) {
    const strippedAndLowerCaseText = (text.toLowerCase().match(/[a-z]{3,}/g) || [])[0];
    if (strippedAndLowerCaseText) {
      const httpOptions = {
        headers: new HttpHeaders({
          'X-Mashape-Key': 'FgpbZPJx5omsh2Gx0AQR8nBwIk4lp1sySedjsnQyLKufvKV9TK',
          'Accept': 'application/json'
        })
      };

      const once = this.httpClient
        .get(`https://wordsapiv1.p.mashape.com/words/${strippedAndLowerCaseText}/synonyms`, httpOptions)
        .subscribe(
          (words: IWordsAPIResponse) => {
            this.santizedText = words.word;
            this.results = words.synonyms;
            this.loading = false;
            once.unsubscribe();
          },
          error => {
            console.log(error);
            this.santizedText = strippedAndLowerCaseText;
            this.results = [];
            this.loading = false;
          });
    }
  }

  lookup(text: string) {
    setTimeout(() => {
      if (!this._inDblClick) {
        this.doAPILookup(text);
      }
    }, 250);
  }

  replace(text: string) {
    this._inDblClick = true;
    this.replacement.emit(text);
    setTimeout(() => {
      this._inDblClick = false;
    }, 500);
  }

}
