export class EventSeries {
    public i: string;
    public n: string;
    public l?: string;

    constructor(id: string, name: string, location: string) {
        this.i = id;
        this.n = name;
        this.l = location;
    }
}
