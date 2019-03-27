export class CompetitionDTO {
    public f: string;
    public e: string;
    public y: number;

    constructor(fei: string, eventseries: string) {
        this.f = fei;
        this.e = eventseries;
        this.y = Number(fei.substring(0, 4));
    }
}

export class Competition {
    private _fei: string;
    private _eventseries: string;
    private _year: number;
    private _dto: CompetitionDTO;

    constructor(dto: CompetitionDTO) {
        this._dto = dto;

        this._fei = dto.f;
        this._eventseries = dto.e;
        this._year = dto.y;
    }

    get Dto(): CompetitionDTO {
        return this._dto;
    }

    get Fei(): string {
        return this._fei;
    }

    get EventSeries(): string {
        return this._eventseries;
    }

    get Year(): number {
        return this._year;
    }
}
