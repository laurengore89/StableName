export class HorseDTO {
    public regdName: string;
    public fei: string;
    public stableName?: string;
    public colour?: string;
    public sex?: string;
    public height?: number;
    public foaled?: number;
    public legs?: string;
    public studbook?: string;

    constructor(regdName: string, fei: string, stableName: string, sex: string, height: number, foaled: number, colour: string, legs: string, studbook: string) {
        this.regdName = regdName;
        this.fei = fei;
        this.stableName = stableName;
        this.colour = colour;
        this.sex = sex;
        this.height = height;
        this.foaled = foaled;
        this.legs = legs;
        this.studbook = studbook;
    }
}
