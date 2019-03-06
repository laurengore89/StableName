import { Nationality, Gender } from '../enums';

export class RiderDTO {
    public name: string;
    public fei: string;
    public born?: number;
    public gender?: string;
    public nationality?: string;

    constructor(name: string, fei: string, gender: string, born: number, nationality: string) {
        this.name = name;
        this.fei = fei;
        this.gender = gender;
        this.born = born;
        this.nationality = nationality;
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

        this._name = dto.name;
        this._fei = dto.fei;
        this._gender = Gender[dto.gender];
        this._born = dto.born;
        this._nationality = Nationality[dto.nationality];
    }

    public Dto(): RiderDTO {
        return this._dto;
    }

    public Name(): string {
        return this._name;
    }

    public Fei(): string {
        return this._fei;
    }

    public Nationality(): string {
        if (!this._nationality) {
            return '';
        }
        return Nationality[this._nationality];
    }

    public Age(): string {
        if (!this._born) {
            return '';
        }
        return Math.floor((new Date().getTime() - new Date(this._born, 1, 1).getTime()) / (1000 * 60 * 60 * 24 * 365.26)) + 'yo';
    }

    public BaseDescriptor(): string {
        if (!this._nationality && !this._gender) {
            return 'rider';
        }
        if (!this._gender) {
            return this._nationality + ' ' + 'rider';
        }
        return this._nationality + ' ' + this._gender.toLocaleLowerCase() + ' rider';
    }
}
