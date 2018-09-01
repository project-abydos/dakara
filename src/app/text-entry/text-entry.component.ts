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

  private selectionStart: number;
  private selectionEnd: number;

  constructor(private bulletService: BulletsService, private dodAcryonymService: DodAcronymsService) {
    this.activeBullet = bulletService.getActiveBulletFromCollection();
    bulletService.watchBulletCollection().subscribe(collection => this.activeBullet = collection.active);
  }

  ngOnInit() {
  }

  doSaveBullet() {
    this.bulletService.addBulletToCollection(this.activeBullet);
  }

  doSynonymLookup($event: IKeyboardEvent) {
    this.selectionStart = $event.target.selectionStart;
    this.selectionEnd = $event.target.selectionEnd;
    this.selectedText = this.activeBullet.slice(this.selectionStart, this.selectionEnd);
  }

  doAcronymLookup($event: IKeyboardEvent) {
    this.bulletService.updateActiveBulletInCollection(this.activeBullet);
  }

  onReplace(text: string) {
    this.activeBullet = [
      this.activeBullet.substr(0, this.selectionStart),
      text,
      this.activeBullet.substr(this.selectionEnd)
    ].join('');
    this.selectionEnd = this.selectionStart + text.length;
    this.bulletService.updateActiveBulletInCollection(this.activeBullet);
  }

}
