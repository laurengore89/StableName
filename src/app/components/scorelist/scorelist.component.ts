import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ScoreHorseRider, Horse, EventSeries, Competition } from 'src/app/models';
import { DbService } from 'src/app/services';

@Component({
    selector: 'sn-scorelist',
    templateUrl: './scorelist.component.html',
    styleUrls: ['./scorelist.component.scss']
})
export class ScorelistComponent implements OnInit {
    public scoresShow: ScoreHorseRider[];
    public comps: Competition[];
    public eventserieses: EventSeries[];

    constructor(private dbService: DbService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        const riders = this.dbService.Riders;
        const horses = this.dbService.Horses;
        const scores = this.dbService.Scores;

        const compfei = this.route.snapshot.paramMap.get('compfei');

        const entries = scores
            .filter(s => s.Competition.Fei === compfei);

        this.scoresShow = entries
            .map(s => new ScoreHorseRider(
                s,
                horses.find(h => h.Fei === s.Horse.Fei), riders.find(r => r.Fei === s.Rider.Fei)
            ))
            .sort(ScoreHorseRider.sortByResult);

        this.scoresShow.map(shr => {
            const riderScores = scores.filter(s => s.Rider.Fei === shr.rider.Fei);
            const uniqueHorseNames = [...new Set(Horse.sortHorsesByRecent(riderScores.map(s => horses.find(h => h.Fei === s.Horse.Fei)), riderScores).map(h => h.Name.indexOf('(') > -1 ? h.Name.substring(0, h.Name.indexOf('(') - 1) : h.Name))];

            shr.rider.horseList = uniqueHorseNames.length < 11 ? uniqueHorseNames.join(', ') : uniqueHorseNames.slice(0, 10).join(', ') + '...';
        });

        this.comps = this.dbService.Competitions;
        this.eventserieses = this.dbService.EventSerieses;
    }
}
