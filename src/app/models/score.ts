export class Score {
    private _rider: string;
    private _horse: string;
    private _dressage: number;
    private _xcfault: number;
    private _xctime: number;
    private _sjfault: number;
    private _sjtime: number;
    private _jumpofffault: number;
    private _jumpofftime: number;

    constructor(rider: string, horse: string, scores: string) {
        this._rider = rider;
        this._horse = horse;
        const re: RegExp = new RegExp('^\\t?(([\\d\\.]*?)\\s+){9}(.*?)$', 'g'); // this reads the scores line from a data.fei.org scrape
        let matches = re.exec(scores);
        this._dressage = Number(matches[1]);
        this._xcfault = Number(matches[2]);
        this._xctime = Number(matches[3]);
        this._sjfault = Number(matches[4]);
        this._sjtime = Number(matches[5]);
        this._jumpofffault = Number(matches[6]);
        this._jumpofftime = Number(matches[7]);
    }
}
