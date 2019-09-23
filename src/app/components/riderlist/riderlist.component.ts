import { Component, OnInit } from '@angular/core';

import { Rider, Competition, EventSeries } from 'src/app/models';
import { DbService } from 'src/app/services';

@Component({
    selector: 'sn-riderlist',
    templateUrl: './riderlist.component.html',
    styleUrls: ['./riderlist.component.scss']
})
export class RiderlistComponent implements OnInit {
    public ridersShow: Rider[];
    public comps: Competition[];
    public eventserieses: EventSeries[];

    constructor(private dbService: DbService) {
    }

    ngOnInit() {
        const riders = this.dbService.GetRiders();
        const scores = this.dbService.GetScores();

        const compfei = this.dbService.GetCompFei();

        if (compfei) {
            this.ridersShow = riders.filter(rider => scores.some(s => s.Rider.Fei === rider.Fei && s.Competition.Fei === compfei)).sort((a, b) => { if (a.scores.length > b.scores.length) { return -1; } if (a.scores.length < b.scores.length) { return 1; } return 0; });
        } else {
            this.ridersShow = riders.sort((a, b) => { if (a.scores.length > b.scores.length) { return -1; } if (a.scores.length < b.scores.length) { return 1; } return 0; }).slice(0, 25);
        }

        // this.ridersShow = riders.filter(rider => rider.Fei === '10005138');

        this.comps = this.dbService.GetComps();
        this.eventserieses = this.dbService.GetEventSerieses();
    }
}
