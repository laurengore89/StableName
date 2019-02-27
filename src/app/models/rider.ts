import { Nationality, Gender } from '../enums';

export class Rider {
    private _name: string;
    private _born: number;
    private _gender: Gender;
    private _nationality: Nationality;

    constructor(name: string, gender: Gender, born: number, nationality: Nationality) {
        this._name = name;
        this._gender = gender;
        this._born = born;
        this._nationality = nationality;
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
        return Nationality[this._nationality] + ' ' + Gender[this._gender].toLocaleLowerCase() + ' rider';
    }
}
