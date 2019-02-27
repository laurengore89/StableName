import { Component } from '@angular/core';
import { Horse, Rider } from './models';
import { Gender, Nationality } from './enums';
import { HorseDTO } from './models/horseDTO';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StableName';
  horses: Horse[];
  riders: Rider[];

  constructor() {
    this.horses = [];

    const datajson = '{"regdName":"Quicklook V","stableName":"Pebbles","sex":"M","height":16.1,"foaled":2005,"colour":"G","studbook":"AES"}';

    this.horses.push(new Horse(JSON.parse(datajson) as HorseDTO));

    // this.horses.push(new Horse('Quicklook V', 'Pebbles', 'Mare', 16.1, 2005, 'Grey', 'AES'));
    this.horses.push(new Horse(new HorseDTO('Arctic Soul', 'Spike', 'G', 16.3, 2003, 'B', 'TB')));
    // this.horses.push(new Horse('Chilli Morning', 'Chilli', Sex.Stallion, new Height(17, 0), 2000, Colour.Chestnut, Studbook.BB));
    // this.horses.push(new Horse('Chilli Knight', 'Alfie', Sex.Gelding, new Height(16, 2), 2010, Colour.Chestnut, Studbook.SHBGB));
    // this.horses.push(new Horse('Cooley Rorkes Drift', 'Art', Sex.Stallion, new Height(0, 0), 2006, Colour.Bay, Studbook.ISH));
    // this.horses.push(new Horse('Nip Tuck', 'Barney', Sex.Gelding, new Height(18, 0), 2004, Colour.Bay, Studbook.KWPN));
    // this.horses.push(new Horse('Valegro', 'Blueberry', Sex.Gelding, new Height(16, 2), 2002, Colour.Bay, Studbook.KWPN));
    // this.horses.push(new Horse('Uthopia', 'Uti', Sex.Stallion, new Height(16, 1), 2001, Colour.BlackBay, Studbook.KWPN));
    // this.horses.push(new Horse('Hawtins Delicato', 'Del', Sex.Gelding, new Height(16, 3), 2008, Colour.Brown, Studbook.HAN));
    // this.horses.push(new Horse('Hawtins San Floriana', 'Flo', Sex.Mare, new Height(16, 3), 2012, Colour.Brown, Studbook.HAN));
    // this.horses.push(new Horse('Nutbush', 'Gus', Sex.Gelding, new Height(17, 0), 2012, Colour.Bay, Studbook.BWBS));
    // this.horses.push(new Horse('Ekitoff', 'Blackie', Sex.Gelding, new Height(16, 2), 2009, Colour.Black, Studbook.KWPN));
    // this.horses.push(new Horse('Brioso LL', 'Bella', Sex.Mare, new Height(0, 0), 2010, Colour.Chestnut, Studbook.HAN));
    // this.horses.push(new Horse('Goldfinger', 'Goldie', Sex.Gelding, new Height(17, 1), 2010, Colour.Chestnut, Studbook.HAN));
    // this.horses.push(new Horse('U-Genius', 'Douglas', Sex.Stallion, new Height(17, 3), 2011, Colour.Black, Studbook.AES));

    this.riders = [];
    this.riders.push(new Rider('Carl Hester', Gender.Male, 1967, Nationality.British));
    this.riders.push(new Rider('Gemma Tattersall', Gender.Female, 1985, Nationality.British));
    this.riders.push(new Rider('Mary King', Gender.Female, 1961, Nationality.British));
    this.riders.push(new Rider('Bettina Hoy', Gender.Female, 1962, Nationality.German));
  }
}
