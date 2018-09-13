import { Component, OnInit } from '@angular/core';
import { BulletsService } from '../bullets.service';
import { SettingsService, ISettingsCollection } from '../settings.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  settings: ISettingsCollection;

  ngOnInit() { }

  constructor(public bulletService: BulletsService, public settingsService: SettingsService) {
    this.settings = settingsService.getSettingsCollection();
  }
}
