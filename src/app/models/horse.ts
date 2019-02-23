import { Studbook, Colour, Sex } from '../enums';
import { Height } from './';

export class Horse {
    private _regdName: string;
    private _stableName: string;
    private _studbook: Studbook;
    private _sex: Sex;
    private _height: Height;
    private _foaled: number;
    private _colour: Colour;

    constructor(regdname: string, stablename: string, sex: Sex, height: Height, foaled: number, colour: Colour, studbook: Studbook) {
        this._regdName = regdname;
        this._stableName = stablename;
        this._sex = sex;
        this._height = height;
        this._foaled = foaled;
        this._colour = colour;
        this._studbook = studbook;
    }

    public Name() {
        return this._regdName + (this._stableName ? ' (' + this._stableName + ')' : '');
    }

    public Studbook() {
        return this._studbook;
    }

    public Height() {
        if (!this._height.Hands) {
            return '';
        }
        return this._height.Hands + '.' + Math.floor(this._height.Inches) + 'hh' + (this._height.Inches === Math.floor(this._height.Inches) ? '' : ' and ' + (this._height.Inches - Math.floor(this._height.Inches)));
    }

    public Age() {
        if (!this._foaled) {
            return 0;
        }
        return Math.floor((new Date().getTime() - new Date(this._foaled, 1, 1).getTime()) / (1000 * 60 * 60 * 24 * 365.26)) + 'yo';
    }

    public BaseDescriptor() {
        return Colour[this._colour].toLocaleLowerCase() + ' ' + Sex[this._sex].toLocaleLowerCase();
    }
}
