import { Component, Input, OnInit } from '@angular/core';
import { Horse, Score } from '../../../models';

@Component({
  selector: 'sn-riderlist-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})

export class RiderlistHorseComponent implements OnInit {
  @Input() horse: Horse;
  @Input() ridername: string;
  public scoresShow: Score[];
  public showNotes = true;

  ngOnInit() {
    this.scoresShow = [];
  }

  openDataPages(): void {
    window.open('https://data.fei.org/Horse/Performance.aspx?horsefeiid=' + this.horse.Fei);
    window.open('https://www.google.co.uk/search?btnG=Search+Images&tbm=isch&q=' + '"' + this.horse.Name + '"' + '+' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + '"' + this.horse.Name + '"' + '+' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + '"' + this.horse.Name + '"' + '+' + 'British+Eventing');
  }
}
