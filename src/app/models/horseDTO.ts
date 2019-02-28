export class HorseDTO {
    public regdName: string;
    public stableName: string;
    public sex: string;
    public height: number;
    public foaled: number;
    public colour: string;
    public legs: string;
    public studbook: string;

    constructor(regdName: string, stableName: string, sex: string, height: number, foaled: number, colour: string, legs: string, studbook: string) {
        this.regdName = regdName;
        this.stableName = stableName;
        this.sex = sex;
        this.height = height;
        this.foaled = foaled;
        this.colour = colour;
        this.legs = legs;
        this.studbook = studbook;
    }
}
