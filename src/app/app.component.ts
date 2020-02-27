import { Component } from '@angular/core';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'malangular';
}
