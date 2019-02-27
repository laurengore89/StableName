import { Studbook, Colour, Sex } from '../enums';
import { Height } from './height';
import { HorseDTO } from './horseDTO';

export class Horse {
    private _regdName: string;
    private _stableName: string;
    private _studbook: Studbook;
    private _sex: Sex;
    private _height: Height;
    private _foaled: number;
    private _colour: Colour;

    constructor(dto: HorseDTO) {
        this._regdName = dto.regdName;
        this._stableName = dto.stableName;
        this._sex = Sex[dto.sex];
        this._height = new Height(dto.height);
        this._foaled = dto.foaled;
        this._colour = Colour[dto.colour];
        this._studbook = Studbook[dto.studbook];
    }

    public Name(): string {
        return this._regdName + (this._stableName ? ' (' + this._stableName + ')' : '');
    }

    public Studbook(): string {
        return this._studbook;
    }

    public Height(): string {
        if (!this._height.Hands) {
            return '';
        }
        return this._height.Hands + '.' + this._height.Inches + 'hh';
    }

    public Age(): string {
        if (!this._foaled) {
            return '';
        }
        return Math.floor((new Date().getTime() - new Date(this._foaled, 1, 1).getTime()) / (1000 * 60 * 60 * 24 * 365.26)) + 'yo';
    }

    public BaseDescriptor(): string {
        let printColour: string = this.Colour();
        switch (printColour) {
            case 'blackbay':
                printColour = 'dark bay';
                break;
        }
        return printColour + ' ' + this._sex.toLocaleLowerCase();
    }

    public Colour(): string {
        return this._colour.toLocaleLowerCase();
    }
}
