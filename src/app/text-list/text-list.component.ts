import { Component, OnInit, Input } from '@angular/core';
import { BulletsService } from '../bullets.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.css']
})
export class TextListComponent implements OnInit {

  bullets: Observable<string[]>;

  constructor(bulletService: BulletsService) {
    this.bullets = bulletService.getBullets();
  }

  ngOnInit() {
  }



}
