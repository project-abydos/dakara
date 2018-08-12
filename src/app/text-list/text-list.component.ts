import { Component, OnInit } from '@angular/core';
import { BulletsService } from '../bullets.service';
import * as diff from 'diff';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.css']
})
export class TextListComponent implements OnInit {

  bullets: string[];

  constructor(bulletService: BulletsService) {
    bulletService.getBullets().subscribe(bullets => {
      const activeBullet = bullets.slice(-1)[0] || '';
      const options = {
        ignoreWhitespace: false
      };
      this.bullets = bullets.map(bullet => diff.diffWords(activeBullet, bullet, options));
    });
  }

  ngOnInit() {
  }



}
