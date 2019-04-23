import { Component, OnInit, Input } from '@angular/core';
import { Datablock, ScoreHorseRider } from 'src/app/models';

@Component({
  selector: 'sn-scorelist',
  templateUrl: './scorelist.component.html',
  styleUrls: ['./scorelist.component.scss']
})


export class ScorelistComponent implements OnInit {
  @Input() datablock: Datablock;
  scoresShow: ScoreHorseRider[];

  ngOnInit() {
    this.scoresShow = [];

    this.datablock.scores.filter(score => score.Competition.Fei === '2019_LEXINGTON').sort((a, b) => { if (a.Draw > b.Draw) { return 1; } else if (a.Draw < b.Draw) { return -1; } return 0; }).forEach( s => this.scoresShow.push(new ScoreHorseRider(s)) );

    this.scoresShow.forEach(
      s => s.horse = this.datablock.horses.find(h => h.Fei === s.score.Horse.Fei)
    );

    this.scoresShow.forEach(
      s => s.rider = this.datablock.riders.find(r => r.Fei === s.score.Rider.Fei)
    );
  }
}
