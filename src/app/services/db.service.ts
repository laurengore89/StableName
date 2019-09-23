import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Datablock, Rider, Horse, Score, Competition, EventSeries } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DbService {
    private compfei: string;
    private datablock: Datablock;

    constructor(private http: HttpClient) {
    // just load whatever's in datablock.json
    this.datablock = new Datablock(http, '', '', '', '');

    // load whatever's in datablock.json,
    // then add new or updated show entries from an input file
    // and print it out so it can be saved as the new datablock.json
    // this.datablock = new Datablock(http, 'assets/input.txt', '2019_CI_0065_C_S_01_01', '5LBy', RegexPattern.Eventing);

    // show entries for a single event
    this.compfei = '2019_CI_0065_C_S_01_01';
   }

    public CompFei() {
        return this.compfei;
    }

    public Riders() {
        return this.datablock.riders;
    }

    public Horses() {
        return this.datablock.horses;
    }

    public Scores() {
        return this.datablock.scores;
    }

    public Competitions() {
        return this.datablock.competitions;
    }

    public EventSerieses() {
        return this.datablock.eventseries;
    }


   public GetHorse(fei: string): Horse {
       return this.Horses().find(h => h.Fei === fei);
   }

   public GetRider(fei: string): Rider {
       return this.Riders().find(r => r.Fei === fei);
   }
}
