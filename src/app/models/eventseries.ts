import { Level } from '../enums';

export class EventSeriesDTO {
    public i: string;
    public n: string;
    public l?: string;
    public v?: string;
    public m?: number;

    constructor(id: string, name: string, location: string, level: string, month: number) {
        this.i = id;
        this.n = name;
        this.l = location;
        this.v = level;
        this.m = month;
    }
}

export class EventSeries {
    private _id: string;
    private _name: string;
    private _location?: string;
    private _level?: string;
    private _month?: number;

    private _dto: EventSeriesDTO;

    constructor(dto: EventSeriesDTO) {
        this._dto = dto;

        this._id = dto.i;
        this._name = dto.n;
        this._location = dto.l;
        this._level = dto.v;
        this._month = dto.m;
    }

    get Dto(): EventSeriesDTO {
        return this._dto;
    }

    get Name(): string {
        return this._name;
    }

    get Location(): string {
        return this._location;
    }

    get Level(): string {
        return Level[this._level];
    }

    get Month(): string {
        return (new Date(2000, this._month, 1)).toLocaleDateString('en-gb', { month: 'long' });
    }
}
