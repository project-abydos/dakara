import { Component, OnInit } from '@angular/core';
import { BulletsService } from '../bullets.service';

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

  constructor(private bulletService: BulletsService) {
    this.activeBullet = bulletService.getActiveBullet();
  }

  ngOnInit() {
  }

  update($event: KeyboardEvent) {
    this.bulletService.addBullet(this.activeBullet);
  }

  mouseUp($event) {
    this.selectionStart = $event.target.selectionStart;
    this.selectionEnd = $event.target.selectionEnd;
    this.selectedText = this.activeBullet.slice(this.selectionStart, this.selectionEnd);
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
