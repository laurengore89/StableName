import { Studbook, Colour, Sex } from '../enums';
import { HorseDTO } from './horseDTO';
import { Height } from './height';
import { Legs } from './legs';

export class Horse {
    private _regdName: string;
    private _fei: string;
    private _stableName?: string;
    private _sex?: string;
    private _height?: Height;
    private _foaled?: number;
    private _colour?: string;
    private _legs?: Legs;
    private _studbook?: string;

    constructor(dto: HorseDTO) {
        this._regdName = dto.regdName;
        this._fei = dto.fei;
        this._stableName = dto.stableName;
        this._sex = dto.sex;
        this._height = new Height(dto.height);
        this._foaled = dto.foaled;
        this._colour = dto.colour;
        this._legs = new Legs(dto.legs);
        this._studbook = dto.studbook;
    }

    public Name(): string {
        return this._regdName + (this._stableName ? ' (' + this._stableName + ')' : '');
    }

    public Studbook(): string {
        if (!this._studbook) {
            return '';
        }
        return Studbook[this._studbook] + ' (' + this._studbook + ')';
    }

    public Fei(): string {
        return this._fei;
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

    public Sex(): string {
        if (!this._sex) {
            return '';
        }
        return Sex[this._sex].toLocaleLowerCase();
    }

    public SvgColour(): string {
        return this.Colour().replace(' ', '');
    }

    public Colour(): string {
        if (!this._colour) {
            return '';
        }
        let printColour: string = Colour[ this._colour].toLocaleLowerCase();
        switch (printColour) {
            case 'blackbay':
                printColour = 'dark bay';
                break;
        }
        return printColour;
    }

    public Nearfore(): string {
        return this._legs.nearfore ? this._legs.nearfore.toLocaleLowerCase() : 'none';
    }

    public Offfore(): string {
        return this._legs.offfore ? this._legs.offfore.toLocaleLowerCase() : 'none';
    }

    public Offhind(): string {
        return this._legs.offhind ? this._legs.offhind.toLocaleLowerCase() : 'none';
    }

    public Nearhind(): string {
        return this._legs.nearhind ? this._legs.nearhind.toLocaleLowerCase() : 'none';
    }
}
