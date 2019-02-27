import { Nationality, Gender } from '../enums';
import { RiderDTO } from './riderDTO';

export class Rider {
    private _name: string;
    private _born: number;
    private _gender: Gender;
    private _nationality: Nationality;

    constructor(dto: RiderDTO) {
        this._name = dto.name;
        this._gender = Gender[dto.gender];
        this._born = dto.born;
        this._nationality = Nationality[dto.nationality];
    }

    public Name(): string {
        return this._name;
    }

    public Nationality(): string {
        return Nationality[this._nationality];
    }

    public Age(): string {
        if (!this._born) {
            return '';
        }
        return Math.floor((new Date().getTime() - new Date(this._born, 1, 1).getTime()) / (1000 * 60 * 60 * 24 * 365.26)) + 'yo';
    }

    public BaseDescriptor(): string {
        return this._nationality + ' ' + this._gender.toLocaleLowerCase() + ' rider';
    }
}
