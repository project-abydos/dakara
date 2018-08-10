import { Component } from '@angular/core';
import { BulletsService } from './bullets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dakara';

  clearBullets = () => this.bulletService.clearBullets();

  constructor(private bulletService: BulletsService) {
  }
}
