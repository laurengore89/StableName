import { Component, OnInit, Input } from '@angular/core';
import { DbService } from 'src/app/services';
import { Competition } from 'src/app/models';

@Component({
    selector: 'sn-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
    @Input() eventseriesid: string;
    public competitions: Competition[];

    constructor(private dbService: DbService) {
    }

    ngOnInit() {
        this.competitions = this.dbService.Competitions.filter(c => c.EventSeries === this.eventseriesid);
    }

}
