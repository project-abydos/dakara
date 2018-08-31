import { Component, OnInit } from '@angular/core';
import { BulletsService, IBulletCollection } from '../bullets.service';
import * as diff from 'diff';

const DIFF_OPTIONS = {
  ignoreWhitespace: false
};

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.css']
})
export class TextListComponent implements OnInit {

  bullets: string[];

  constructor(bulletService: BulletsService) {
    bulletService.watchBulletCollection().subscribe(({ bullets, active }: IBulletCollection) => {
      this.bullets = bullets.map(bullet => diff.diffWords(bullet, active, DIFF_OPTIONS));
    });
  }

  ngOnInit() {
  }

}
