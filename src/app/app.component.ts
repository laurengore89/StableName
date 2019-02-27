import { Component } from '@angular/core';
import { Horse, Height } from './models';
import { Studbook, Colour, Sex } from './enums';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StableName';
  horses: Horse[];

  constructor() {
    this.horses = [];
    this.horses.push(new Horse('Quicklook V', 'Pebbles', Sex.Mare, new Height(16, 1), 2005, Colour.Grey, Studbook.AES));
    this.horses.push(new Horse('Arctic Soul', 'Spike', Sex.Gelding, new Height(16, 3), 2003, Colour.Bay, Studbook.TB));
    this.horses.push(new Horse('Chilli Morning', 'Chilli', Sex.Stallion, new Height(17, 0), 2000, Colour.Chestnut, Studbook.BB));
    this.horses.push(new Horse('Chilli Knight', 'Alfie', Sex.Gelding, new Height(16, 2), 2010, Colour.Chestnut, Studbook.SHBGB));
    this.horses.push(new Horse('Cooley Rorkes Drift', 'Art', Sex.Stallion, new Height(0, 0), 2006, Colour.Bay, Studbook.ISH));
    this.horses.push(new Horse('Nip Tuck', 'Barney', Sex.Gelding, new Height(18, 0), 2004, Colour.Bay, Studbook.KWPN));
    this.horses.push(new Horse('Valegro', 'Blueberry', Sex.Gelding, new Height(16, 2), 2002, Colour.Bay, Studbook.KWPN));
    this.horses.push(new Horse('Uthopia', 'Uti', Sex.Stallion, new Height(16, 1), 2001, Colour.BlackBay, Studbook.KWPN));
    this.horses.push(new Horse('Hawtins Delicato', 'Del', Sex.Gelding, new Height(16, 3), 2008, Colour.Brown, Studbook.HAN));
    this.horses.push(new Horse('Hawtins San Floriana', 'Flo', Sex.Mare, new Height(16, 3), 2012, Colour.Brown, Studbook.HAN));
    this.horses.push(new Horse('Nutbush', 'Gus', Sex.Gelding, new Height(17, 0), 2012, Colour.Bay, Studbook.BWBS));
  }
}
