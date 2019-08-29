import { Component, OnInit, Input } from '@angular/core';
import { Datablock, ScoreHorseRider, Score } from 'src/app/models';

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

        // this line generates a new datablock.json containing only the data for a single event
        // that block can then be used in a production build for a form guide
        // subset datablocks can be under 5MB while the full datablock is getting ever larger
        this.buildSubsetDatablock(entries);

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
    }

    private buildSubsetDatablock(entries: Score[]) {
        this.datablock.horses = this.datablock.horses
            .filter(h => entries.map(s => s.Horse.Fei).includes(h.Fei));

        this.datablock.riders = this.datablock.riders
            .filter(r => entries.map(s => s.Rider.Fei).includes(r.Fei));

        this.datablock.scores = this.datablock.scores
            .filter(s => this.datablock.riders.map(r => r.Fei).includes(s.Rider.Fei) && this.datablock.horses.map(h => h.Fei).includes(s.Horse.Fei));

        this.datablock.competitions = this.datablock.competitions
            .filter(c => this.datablock.scores.map(s => s.Competition.Fei).includes(c.Fei));

        this.datablock.eventseries = this.datablock.eventseries
            .filter(e => this.datablock.competitions.map(c => c.EventSeries).includes(e.Id));

        this.datablock.printOut();
    }
}
