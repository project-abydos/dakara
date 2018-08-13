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

  constructor(private bulletService: BulletsService) {
    this.activeBullet = bulletService.getActiveBullet();
  }

  ngOnInit() {
  }

  update($event: KeyboardEvent) {
    this.bulletService.addBullet(this.activeBullet);
  }

  mouseUp($event: MouseEvent) {

    const { selectionStart, selectionEnd } = $event.target;
    this.selectedText = this.activeBullet.slice(selectionStart, selectionEnd);
  }

}
