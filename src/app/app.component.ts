import { Component } from '@angular/core';
import { Horse } from './models/horse';
import { Studbook } from './models/studbook';
import { Height } from './models/height';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StableName';
  myHorse = new Horse('Quicklook V', 'Pebbles', 'Mare', new Height(16, 1), 2005, 'Grey', Studbook.AES);
  myHorse2 = new Horse('Urkel', '', 'Stallion', new Height(17, 0), 2001, 'Grey', Studbook.KWPN);
  myHorse3 = new Horse('Unabresse M', '', 'Mare', new Height(0, 0), 2001, 'Bay', Studbook.KWPN);
  myHorse4 = new Horse('Quick Star', '', 'Stallion', new Height(15, 2.25), 1982, 'Bay', Studbook.FR);
}
