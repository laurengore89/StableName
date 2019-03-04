export class HorseDTO {
    public regdName: string;
    public colour: string;
    public sex: string;
    public stableName?: string;
    public height?: number;
    public foaled?: number;
    public legs?: string;
    public studbook?: string;

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
