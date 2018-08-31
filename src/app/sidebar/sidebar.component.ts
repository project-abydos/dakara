import { Component, OnInit } from '@angular/core';
import { BulletsService, IBulletCollection } from '../bullets.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  bullets: Observable<IBulletCollection[]>;

  constructor(private bulletService: BulletsService) {
    this.bullets = bulletService.watchBulletCollections();
  }

  ngOnInit() {
  }

}
