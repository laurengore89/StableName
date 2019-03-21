import { Nationality, Gender } from '../enums';
import { Horse } from './horse';
import { Score } from './score';

import notesjson from '../data/notes.json';

export class RiderDTO {
    public n: string; // competition name
    public f: string; // FEI ID
    public m?: string; // other names
    public b?: number; // year of birth
    public g?: string; // gender, per Gender enum
    public t?: string; // nationality, per Nationality enum

    constructor(name: string, othername: string, fei: string, gender: string, born: number, nationality: string) {
        this.n = name;
        this.m = othername;
        this.f = fei;
        this.g = gender;
        this.b = born;
        this.t = nationality;
    }
}

export class Rider {
    private _name: string;
    private _othername: string;
    private _fei: string;
    private _born?: number;
    private _gender?: Gender;
    private _nationality?: Nationality;
    private _dto: RiderDTO;

    public horses: Horse[];
    public scores: Score[];

    constructor(dto: RiderDTO) {
        this._dto = dto;

        this._name = dto.n;
        this._othername = dto.m;
        this._fei = dto.f;
        this._gender = Gender[dto.g];
        this._born = dto.b;
        this._nationality = Nationality[dto.t];
    }

    get Dto(): RiderDTO {
        return this._dto;
    }

    get Name(): string {
        return this._name;
    }

    get OtherName(): string {
        return this._othername;
    }

    get Fei(): string {
        return this._fei;
    }

    get Notes(): string {
        let note = notesjson.riders.filter(nt => nt.fei === this.Fei);
        if (note[0] !== undefined) {
            return note[0].note;
        }
        return '';
    }

    get Nationality(): string {
        if (!this._nationality) {
            return '';
        }
        return Nationality[this._nationality];
    }

    get Age(): string {
        if (!this._born) {
            return '';
        }
        return Math.floor((new Date().getTime() - new Date(this._born, 1, 1).getTime()) / (1000 * 60 * 60 * 24 * 365.26)) + 'yo';
    }

    get BaseDescriptor(): string {
        if (!this._nationality && !this._gender) {
            return 'rider';
        }
        if (!this._gender) {
            return this._nationality + ' ' + 'rider';
        }
        return this._nationality + ' ' + this._gender.toLocaleLowerCase() + ' rider';
    }
}
