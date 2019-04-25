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
    this.scoresShow = this.datablock.scores
      .filter(s => s.Competition.Fei === '2019_LEXINGTON')
      .map(s => new ScoreHorseRider(
        s,
        this.datablock.horses.find(h => h.Fei === s.Horse.Fei), this.datablock.riders.find(r => r.Fei === s.Rider.Fei)
      ));

    this.scoresShow.sort((a, b) => {
      if (a.score.Draw > b.score.Draw) {
        return 1;
      } else if (a.score.Draw < b.score.Draw) {
        return -1;
      }
      return 0;
    });
  }
}
