import { Studbook, Colour, Legmarking, Sex } from '../enums';

export class Height {
    public Hands: number;
    public Inches: number;

    constructor(decimal: number) {
        this.Hands = Math.floor(decimal);
        this.Inches = Math.floor(10 * (decimal - Math.floor(decimal)));
    }
}

export class Legs {
    public nearfore: Legmarking;
    public offfore: Legmarking;
    public offhind: Legmarking;
    public nearhind: Legmarking;

    constructor(abbreviated: string) {
        if (abbreviated.length !== 4) {
            return;
        }
        this.nearfore = Legmarking[abbreviated[0]];
        this.offfore = Legmarking[abbreviated[1]];
        this.offhind = Legmarking[abbreviated[2]];
        this.nearhind = Legmarking[abbreviated[3]];
    }
}

export class HorseDTO {
    public regdName: string;
    public fei: string;
    public stableName?: string;
    public colour?: string;
    public sex?: string;
    public height?: number;
    public foaled?: number;
    public legs?: string;
    public studbook?: string;

    constructor(regdName: string, fei: string, stableName: string, sex: string, height: number, foaled: number, colour: string, legs: string, studbook: string) {
        this.regdName = regdName;
        this.fei = fei;
        this.stableName = stableName;
        this.colour = colour;
        this.sex = sex;
        this.height = height;
        this.foaled = foaled;
        this.legs = legs;
        this.studbook = studbook;
    }
}

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
    private _dto: HorseDTO;

    constructor(dto: HorseDTO) {
        this._dto = dto;

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

    public Dto(): HorseDTO {
        return this._dto;
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
        return Colour[ this._colour].toLocaleLowerCase().replace('bay', ' bay').replace('chestnut', ' chestnut');
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
