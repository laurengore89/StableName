export class RiderDTO {
    public name: string;
    public fei: string;
    public born?: number;
    public gender?: string;
    public nationality?: string;

    constructor(name: string, fei: string, gender: string, born: number, nationality: string) {
        this.name = name;
        this.fei = fei;
        this.gender = gender;
        this.born = born;
        this.nationality = nationality;
    }
}
