import { Component, OnInit } from '@angular/core';

import { DbService } from 'src/app/services';
import { EventSeries } from 'src/app/models';

@Component({
    selector: 'sn-eventlist',
    templateUrl: './eventlist.component.html',
    styleUrls: ['./eventlist.component.scss']
})

export class EventlistComponent implements OnInit {
    public eventserieses: EventSeries[];

    constructor(private dbService: DbService) {
    }

    ngOnInit() {
        this.eventserieses = this.dbService.EventSerieses
        .sort((a, b) => a.MonthNum - b.MonthNum);
    }
}
