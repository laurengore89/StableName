import { Component, Input, OnInit } from '@angular/core';
import { Horse } from 'src/app/models';
import { DbService } from 'src/app/services';

@Component({
  selector: 'sn-scorelist-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})

export class ScorelistHorseComponent implements OnInit {
  @Input() horsefei: string;
  @Input() position: string;
  @Input() ridername: string;
  @Input() outcome: string;
  public dnf: boolean;
  public horse: Horse;

  constructor(private dbService: DbService) {
  }

  ngOnInit() {
    this.dnf = this.position === 'EL' || this.position === 'WD' || this.position === 'RET' || this.position === 'DSQ';

    this.horse = this.dbService.GetHorse(this.horsefei);
  }

  openDataPages(): void {
    window.open('https://data.fei.org/Horse/Performance.aspx?horsefeiid=' + this.horse.Fei);
    window.open('https://www.google.co.uk/search?btnG=Search+Images&tbm=isch&q=' + '"' + this.horse.Name + '"' + '+' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + '"' + this.horse.Name + '"' + '+' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + '"' + this.horse.Name + '"' + '+' + 'British+Eventing');
  }
}
