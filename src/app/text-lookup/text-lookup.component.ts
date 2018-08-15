import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface IWordsAPIResponse {
  synonyms: string[];
  word: string;
}

@Component({
  selector: 'app-text-lookup',
  templateUrl: './text-lookup.component.html',
  styleUrls: ['./text-lookup.component.css']
})
export class TextLookupComponent implements OnInit, OnChanges {

  @Input() text = '';

  results: string[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes.text;
    if (currentValue) {
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
        .subscribe((words: IWordsAPIResponse) => {
          this.text = words.word;
          this.results = words.synonyms;
          once.unsubscribe();
        });
    }
  }

  lookup(text: string) {
    this.doAPILookup(text);
  }

}
