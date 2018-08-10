import { Component, OnInit } from '@angular/core';
import { BulletsService } from '../bullets.service';

@Component({
  selector: 'app-text-entry',
  templateUrl: './text-entry.component.html',
  styleUrls: ['./text-entry.component.css']
})
export class TextEntryComponent implements OnInit {

  activeBullet = '';

  constructor(private bulletService: BulletsService) { }

  ngOnInit() {
  }

  update(value: string) {
    this.bulletService.addBullet(this.activeBullet)
  }

}
