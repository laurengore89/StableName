export class Height {
    public Hands: number;
    public Inches: number;

    constructor(decimal: number) {
        this.Hands = Math.floor(decimal);
        this.Inches = Math.floor(10 * (decimal - Math.floor(decimal)));
    }
}
