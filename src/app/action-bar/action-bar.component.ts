import { Component, OnInit } from '@angular/core';
import { BulletsService } from '../bullets.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  ngOnInit() { }

  constructor(public bulletService: BulletsService) { }

}
