import { Component, OnInit } from '@angular/core';
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

    ngOnInit() {
        const riders = this.dbService.GetRiders();
        const horses = this.dbService.GetHorses();
        const scores = this.dbService.GetScores();
        const compfei = this.dbService.GetCompFei();

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

        this.comps = this.dbService.GetComps();
        this.eventserieses = this.dbService.GetEventSerieses();
    }

    constructor(private dbService: DbService) {
    }
}
