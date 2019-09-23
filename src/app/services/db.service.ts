import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Datablock } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DbService {
    public compfei: string;
    public datablock: Datablock;

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

   public GetRiders() {
       return this.datablock.riders;
   }

   public GetHorses() {
       return this.datablock.horses;
   }

   public GetScores() {
       return this.datablock.scores;
   }

   public GetComps() {
       return this.datablock.competitions;
   }

   public GetEventSerieses() {
       return this.datablock.eventseries;
   }

   public GetCompFei() {
       return this.compfei;
   }
}
