import { Component, Input } from '@angular/core';
import { Horse } from '../../models';

@Component({
  selector: 'sn-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})

export class HorseComponent {
  @Input() horse: Horse;
  @Input() ridername: string;

  openDataPages(): void {
    window.open('https://data.fei.org/Horse/Performance.aspx?horsefeiid=' + this.horse.Fei);
    window.open('https://www.google.co.uk/search?btnG=Search+Images&tbm=isch&q=' + this.horse.Name + '+' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + this.horse.Name + '+' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + this.horse.Name + '+' + 'British+Eventing');
  }
}
