import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IDataMuseResponse {
  word: string;
  score: number;
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
    currentValue && this.doAPILookup(currentValue);
  }

  doAPILookup(text) {
    this.httpClient
      .get(`https://api.datamuse.com/words?rel_syn=${text.trim()}&max=10`)
      .toPromise()
      .then((words: IDataMuseResponse[]) => {
        this.results = words.map(word => word.word);
      });
  }

  lookup(text: string) {
    this.text = text;
    this.doAPILookup(text);
  }

}
