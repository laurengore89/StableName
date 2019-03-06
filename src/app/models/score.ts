import { Studbook } from '../enums';
import { Horse, HorseDTO } from './horse';
import { Rider, RiderDTO } from './rider';
import { Competition } from './competition';

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

export class ScoreDTO {
    public _competition: string;
    public _rider: string;
    public _horse: string;
    public _result: Result;

    constructor(s: Score) {
        this._competition = s.Competition().Fei;
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
    private _competition: string;
    private _result: Result;

    constructor(competition: string, scoreFacts: string[], result: Result) {
        // [0] is final scored position at that competition
        // [1] is rider's FEI ID e.g. '10005015'
        // [2] is rider's name and nationality e.g. 'Michael JUNG (GER)'
        // [3] is horse's FEI ID e.g. 'GER40255'
        // [4] is horse's name e.g. 'LA BIOSTHETIQUE - SAM FBW'
        // [5], if it exists, is horse's studbook e.g. 'DSP'
        this._competition = competition;
        this._rider = scoreFacts[1];
        this._ridername = scoreFacts[2].substring(0, scoreFacts[2].indexOf('(') - 1);
        this._ridernation = scoreFacts[2].substring(scoreFacts[2].indexOf('(') + 1, scoreFacts[2].indexOf(')'));
        this._horse = scoreFacts[3];
        this._horsename = scoreFacts[4];
        if (scoreFacts.length > 5 && Studbook[scoreFacts[5]] !== undefined) {
            this._horsestudbook = scoreFacts[5];
        }
        this._result = result;
    }

    public Dto() {
        return new ScoreDTO(this);
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

    public Competition() {
        return new Competition(this._competition, '');
    }
}
