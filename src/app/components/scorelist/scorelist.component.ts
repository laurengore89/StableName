import { Component, OnInit, Input } from '@angular/core';
import { Datablock, Horse, Score } from 'src/app/models';

@Component({
  selector: 'sn-scorelist',
  templateUrl: './scorelist.component.html',
  styleUrls: ['./scorelist.component.scss']
})
export class ScorelistComponent implements OnInit {
  @Input() datablock: Datablock;
  horsesShow: Horse[];

  ngOnInit() {
    let relevantScores: Score[] = this.datablock.scores.filter(score => score.Competition.Fei === '2019_LEXINGTON');
    this.horsesShow = this.datablock.horses.filter(horse => relevantScores.some(score => score.Horse.Fei === horse.Fei)).sort((a, b) => { if (relevantScores.find(score => score.Horse.Fei === a.Fei).Draw > relevantScores.find(score => score.Horse.Fei === b.Fei).Draw) { return 1; } if (relevantScores.find(score => score.Horse.Fei === a.Fei).Draw < relevantScores.find(score => score.Horse.Fei === b.Fei).Draw) { return -1; } return 0; });
  }
}
