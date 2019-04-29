import { Component, Input, OnInit } from '@angular/core';
import { Horse } from 'src/app/models';

@Component({
  selector: 'sn-scorelist-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})

export class ScorelistHorseComponent implements OnInit {
  @Input() horse: Horse;
  @Input() position: string;
  @Input() ridername: string;
  @Input() outcome: string;
  public dnf: boolean;

  constructor() { }

  ngOnInit() {
    this.dnf = this.position === 'EL' || this.position === 'WD' || this.position === 'RET' || this.position === 'DSQ';
  }

  openDataPages(): void {
    window.open('https://data.fei.org/Horse/Performance.aspx?horsefeiid=' + this.horse.Fei);
    window.open('https://www.google.co.uk/search?btnG=Search+Images&tbm=isch&q=' + '"' + this.horse.Name + '"' + '+' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + '"' + this.horse.Name + '"' + '+' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + '"' + this.horse.Name + '"' + '+' + 'British+Eventing');
  }
}
