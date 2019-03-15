import { EventSeries } from '../enums';

export class CompetitionDTO {
    public f: string;
    public e: string;
    public y: number;
    public j?: string;
    public d?: string;

    constructor(fei: string, eventseries: string, year: number, dressage: string, jumping: string) {
        this.f = fei;
        this.e = eventseries;
        this.y = year;
        this.d = dressage;
        this.j = jumping;
    }
}

export class Competition {
    private _fei: string;
    private _eventseries: string;
    private _year: number;
    private _jumping?: string;
    private _dressage?: string;
    private _dto: CompetitionDTO;

    constructor(dto: CompetitionDTO) {
        this._dto = dto;

        this._fei = dto.f;
        this._eventseries = dto.e;
        this._year = dto.y;
        this._jumping = dto.j;
        this._dressage = dto.d;
    }

    get Dto(): CompetitionDTO {
        return this._dto;
    }

    get Fei(): string {
        return this._fei;
    }

    get Name(): string {
        return EventSeries[this._eventseries] + ' ' + this._year;
    }

    get Year(): number {
        return this._year;
    }
}
