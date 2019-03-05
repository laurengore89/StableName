import { Horse } from './horse';
import { HorseDTO } from './horseDTO';
import { Rider } from './rider';
import { RiderDTO } from './riderDTO';
import { Studbook } from '../enums';

export class Score {
    private _rider: string;
    private _ridername: string;
    private _horse: string;
    private _horsename: string;
    private _horsestudbook: string;
    private _dressage: number;
    private _xcfault: number;
    private _xctime: number;
    private _sjfault: number;
    private _sjtime: number;
    private _jumpofffault: number;
    private _jumpofftime: number;
    _ridernation: string;

    constructor(scoreFacts: string[], matches: RegExpExecArray) {
        // [0] is final scored position at that event
        // [1] is rider's FEI ID e.g. '10005015'
        // [2] is rider's name and nationality e.g. 'Michael JUNG (GER)'
        // [3] is horse's FEI ID e.g. 'GER40255'
        // [4] is horse's name e.g. 'LA BIOSTHETIQUE - SAM FBW'
        // [5], if it exists, is horse's studbook e.g. 'DSP'
        // matches is a RegEx dissection of the scores line e.g. '	40.9	0	0	0	0	0	0	 		40.9 / 40.9'
        // scores line breakdown:
        // dressage score, XC faults, XC time, SJ faults, SJ time, SJ jumpoff faults, SJ jumpoff time, final score / final score + jumpoff score
        // final score entry can be replaced by a letter code e.g. 'XC-R' if the horse did not complete
        // see https://inside.fei.org/system/files/Eventing%20results%20description%202018_0.pdf for full specification
        this._rider = scoreFacts[1];
        this._ridername = scoreFacts[2].substring(0, scoreFacts[2].indexOf('(') - 1);
        this._ridernation = scoreFacts[2].substring(scoreFacts[2].indexOf('(') + 1, scoreFacts[2].indexOf(')'));
        this._horse = scoreFacts[3];
        this._horsename = scoreFacts[4];
        if (scoreFacts.length > 5 && Studbook[scoreFacts[5]] !== undefined) {
            this._horsestudbook = scoreFacts[5];
        }
        this._dressage = Number(matches[1]);
        this._xcfault = Number(matches[2]);
        this._xctime = Number(matches[3]);
        this._sjfault = Number(matches[4]);
        this._sjtime = Number(matches[5]);
        this._jumpofffault = Number(matches[6]);
        this._jumpofftime = Number(matches[7]);
    }

    public Horse() {
        return new Horse(new HorseDTO(this._horsename, this._horse, '', '', 0, 0, '', '', this._horsestudbook));
    }

    public Rider() {
        return new Rider(new RiderDTO(this._ridername, this._rider, '', 0, this._ridernation));
    }
}
