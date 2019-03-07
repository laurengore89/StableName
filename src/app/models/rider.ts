import { Nationality, Gender } from '../enums';

export class RiderDTO {
    public n: string;
    public f: string;
    public b?: number;
    public g?: string;
    public t?: string;

    constructor(name: string, fei: string, gender: string, born: number, nationality: string) {
        this.n = name;
        this.f = fei;
        this.g = gender;
        this.b = born;
        this.t = nationality;
    }
}

export class Rider {
    private _name: string;
    private _fei: string;
    private _born?: number;
    private _gender?: Gender;
    private _nationality?: Nationality;
    private _dto: RiderDTO;

    constructor(dto: RiderDTO) {
        this._dto = dto;

        this._name = dto.n;
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

    get Fei(): string {
        return this._fei;
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
