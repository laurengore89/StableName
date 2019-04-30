import { Component, Input, OnInit } from '@angular/core';
import { Horse, Score, Competition, EventSeries } from '../../../models';

@Component({
  selector: 'sn-riderlist-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})

export class RiderlistHorseComponent implements OnInit {
  @Input() horse: Horse;
  @Input() ridername: string;
  @Input() riderfei: string;
  @Input() comps: Competition[];
  @Input() eventserieses: EventSeries[];
  public scoresShow: string[];
  public showNotes = true;

  ngOnInit() {
    let scores: Score[] = this.horse.scores.filter(s => s.Rider.Fei === this.riderfei).sort((a, b) => { if (a.Competition.Fei > b.Competition.Fei) { return -1; } else if (b.Competition.Fei > a.Competition.Fei) { return 1; } return 0; });
    this.scoresShow = scores.map(s => this.eventserieses.find(e => e.Id === this.comps.find(c => c.Fei === s.Competition.Fei).EventSeries).Name + '\xa0' + this.comps.find(c => c.Fei === s.Competition.Fei).Year + ':' + (s.Result.p === 'EL' || s.Result.p === 'WD' || s.Result.p === 'RET' || s.Result.p === 'DSQ' ? s.Result.p + '\xa0-\xa0' + s.Result.o : s.Result.p));
  }

  openDataPages(): void {
    window.open('https://data.fei.org/Horse/Performance.aspx?horsefeiid=' + this.horse.Fei);
    window.open('https://www.google.co.uk/search?btnG=Search+Images&tbm=isch&q=' + '"' + this.horse.Name + '"' + '+' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + '"' + this.horse.Name + '"' + '+' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + this.ridername);
    window.open('https://www.google.co.uk/search?q=' + '"' + this.horse.Name + '"' + '+' + 'British+Eventing');
  }
}
