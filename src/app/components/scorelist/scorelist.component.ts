import { Component, OnInit, Input } from '@angular/core';
import { Datablock, ScoreHorseRider, Horse } from 'src/app/models';

@Component({
    selector: 'sn-scorelist',
    templateUrl: './scorelist.component.html',
    styleUrls: ['./scorelist.component.scss']
})


export class ScorelistComponent implements OnInit {
    @Input() datablock: Datablock;
    @Input() compfei: string;
    public scoresShow: ScoreHorseRider[];

    ngOnInit() {
        const entries = this.datablock.scores
            .filter(s => s.Competition.Fei === this.compfei);

        this.scoresShow = entries
            .map(s => new ScoreHorseRider(
                s,
                this.datablock.horses.find(h => h.Fei === s.Horse.Fei), this.datablock.riders.find(r => r.Fei === s.Rider.Fei)
            ));

        this.scoresShow.sort((a, b) => {
            if (a.score.Result.p === 'PEND' && b.score.Result.p !== 'PEND') {
                return 1;
            } else if (b.score.Result.p === 'PEND' && a.score.Result.p !== 'PEND') {
                return -1;
            } else if ((a.score.Result.p === 'PEND' && b.score.Result.p === 'PEND') || (a.score.Result.p !== 'PEND' && b.score.Result.p !== 'PEND')) {
                if (a.score.Sum === 0 && b.score.Sum === 0) {
                    if (a.score.Draw > b.score.Draw) {
                        return 1;
                    } else if (a.score.Draw < b.score.Draw) {
                        return -1;
                    }
                    return 0;
                } else if (a.score.Sum > b.score.Sum || a.score.Sum === 0) {
                    return -1;
                } else if (a.score.Sum < b.score.Sum || b.score.Sum === 0) {
                    return 1;
                }
                return 0;
            } else {
                if (a.score.Draw > b.score.Draw) {
                    return 1;
                } else if (a.score.Draw < b.score.Draw) {
                    return -1;
                }
                return 0;
            }
        });

        this.scoresShow.map(shr => {
            const riderScores = this.datablock.scores.filter(s => s.Rider.Fei === shr.rider.Fei);
            const uniqueHorseNames = [...new Set(Horse.sortHorsesByRecent(riderScores.map(s => this.datablock.horses.find(h => h.Fei === s.Horse.Fei)), riderScores).map(h => h.Name.indexOf('(') > -1 ? h.Name.substring(0, h.Name.indexOf('(') - 1) : h.Name))];
            shr.rider.horseList = uniqueHorseNames.length < 11 ? uniqueHorseNames.join(', ') : uniqueHorseNames.slice(0, 10).join(', ') + '...';
        });
    }
}
