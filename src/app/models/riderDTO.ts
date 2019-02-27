export class RiderDTO {
    public name: string;
    public born: number;
    public gender: string;
    public nationality: string;

    constructor(name: string, gender: string, born: number, nationality: string) {
        this.name = name;
        this.gender = gender;
        this.born = born;
        this.nationality = nationality;
    }
}
