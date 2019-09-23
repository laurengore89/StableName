import { Component, Input, OnInit } from '@angular/core';
import { Rider, Horse } from '../../../models';
import { DbService } from 'src/app/services';

@Component({
    selector: 'sn-riderlist-rider',
    templateUrl: './rider.component.html',
    styleUrls: ['./rider.component.scss']
})
export class RiderlistRiderComponent implements OnInit {
    @Input() riderfei: string;
    public rider: Rider;
    public horsesShow: Horse[];

    constructor(private dbService: DbService) {
    }

    ngOnInit() {
        this.rider = this.dbService.GetRider(this.riderfei);
        this.horsesShow = Horse.sortHorsesByRecent(this.rider.horses, this.rider.scores);
    }
}

