import { Studbook } from '../enums';
import { Horse, HorseDTO } from './horse';
import { Rider, RiderDTO } from './rider';

export class Result {
    public _dressage: number;
    public _xcfault: number;
    public _xctime: number;
    public _sjfault: number;
    public _sjtime: number;
    public _jumpofffault: number;
    public _jumpofftime: number;
    public _outcome: string;
}

export class FlatScore {
    public _rider: string;
    public _horse: string;
    public _result: Result;

    constructor(s: Score) {
        this._rider = s.Rider().Fei();
        this._horse = s.Horse().Fei();
        this._result = s.Result();
    }
}

export class Score {
    private _rider: string;
    private _ridername: string;
    private _ridernation: string;
    private _horse: string;
    private _horsename: string;
    private _horsestudbook: string;
    private _result: Result;


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
        this._result = new Result();
        this._result._dressage = Number(matches[1]);
        this._result._xcfault = Number(matches[2]);
        this._result._xctime = Number(matches[3]);
        this._result._sjfault = Number(matches[4]);
        this._result._sjtime = Number(matches[5]);
        this._result._jumpofffault = Number(matches[6]);
        this._result._jumpofftime = Number(matches[7]);
        this._result._outcome = matches[8];
    }

    public Horse() {
        return new Horse(new HorseDTO(this._horsename, this._horse, '', '', 0, 0, '', '', this._horsestudbook));
    }

    public Rider() {
        return new Rider(new RiderDTO(this._ridername, this._rider, '', 0, this._ridernation));
    }

    public Result() {
        return this._result;
    }

    public Flat() {
        return new FlatScore(this);
    }
}
