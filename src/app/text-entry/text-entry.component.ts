import { Component, OnInit } from '@angular/core';
import { BulletsService } from '../bullets.service';
import { DodAcronymsService, IDoDAcronym } from '../dod-acronyms.service';

interface IKeyboardEvent extends KeyboardEvent {
  target: HTMLInputElement;
}

@Component({
  selector: 'app-text-entry',
  templateUrl: './text-entry.component.html',
  styleUrls: ['./text-entry.component.css']
})
export class TextEntryComponent implements OnInit {

  activeBullet = '';
  selectedText = '';
  matchedAcronyms: IDoDAcronym[];

  private selectionStart: number;
  private selectionEnd: number;

  constructor(private bulletService: BulletsService, private dodAcryonymService: DodAcronymsService) {
    this.activeBullet = bulletService.getActiveBullet();
  }

  ngOnInit() {
  }

  doSaveBullet() {
    this.bulletService.addBullet(this.activeBullet);
  }

  doSynonymLookup($event: IKeyboardEvent) {
    this.selectionStart = $event.target.selectionStart;
    this.selectionEnd = $event.target.selectionEnd;
    this.selectedText = this.activeBullet.slice(this.selectionStart, this.selectionEnd);
  }

  doAcronymLookup($event: IKeyboardEvent) {
    const { key, target: { selectionEnd } } = $event;
    const precedingText = this.activeBullet.substr(0, selectionEnd);
    const matchedText = (precedingText.match(/[A-Z\-\d][A-Za-z\-\d]*$/) || '') + key;

    this.selectionEnd = selectionEnd + 1;
    this.selectionStart = this.selectionEnd - matchedText.length;

    if (matchedText) {
      this.matchedAcronyms = this.dodAcryonymService.lookup(matchedText);
    }
  }

  onReplace(text: string) {
    this.activeBullet = [
      this.activeBullet.substr(0, this.selectionStart),
      text,
      this.activeBullet.substr(this.selectionEnd)
    ].join('');
    this.selectionEnd = this.selectionStart + text.length;
  }

}
