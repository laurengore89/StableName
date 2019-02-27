export class HorseDTO {
    public regdName: string;
    public stableName: string;
    public studbook: string;
    public sex: string;
    public height: number;
    public foaled: number;
    public colour: string;

    constructor(regdName: string, stableName: string, sex: string, height: number, foaled: number, colour: string, studbook: string) {
        this.regdName = regdName;
        this.stableName = stableName;
        this.sex = sex;
        this.height = height;
        this.foaled = foaled;
        this.colour = colour;
        this.studbook = studbook;
    }
}
