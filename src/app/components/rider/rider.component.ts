import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Rider, Horse } from '../../models';
import { DbService } from 'src/app/services';

@Component({
    selector: 'sn-rider',
    templateUrl: './rider.component.html',
    styleUrls: ['./rider.component.scss']
})
export class RiderComponent implements OnInit {
    public rider: Rider;
    public horsesShow: Horse[];

    constructor(private dbService: DbService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        const fei = this.route.snapshot.paramMap.get('fei');

        this.rider = this.dbService.GetRider(fei);
        this.horsesShow = Horse.sortHorsesByRecent(this.rider.horses, this.rider.scores);
    }
}

