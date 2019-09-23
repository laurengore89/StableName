import { Component, OnInit } from '@angular/core';

import { DbService } from 'src/app/services';
import { EventSeries, Competition } from 'src/app/models';

@Component({
    selector: 'sn-eventlist',
    templateUrl: './eventlist.component.html',
    styleUrls: ['./eventlist.component.scss']
})

export class EventlistComponent implements OnInit {
    public competitions: Competition[];
    public eventserieses: EventSeries[];

    constructor(private dbService: DbService) {
    }

    ngOnInit() {
        this.competitions = this.dbService.Competitions;
        this.eventserieses = this.dbService.EventSerieses;
    }
}
