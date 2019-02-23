import { Studbook } from '../enums/studbook';
import { Colour } from '../enums/colour';
import { Height } from './height';

export class Horse {
    public RegdName: string;
    public StableName: string;
    public Sex: string;
    public Height: Height;
    public Foaled: number;
    public Colour: Colour;
    public Studbook: Studbook;

    constructor(regdname: string, stablename: string, sex: string, height: Height, foaled: number, colour: Colour, studbook: Studbook) {
        this.RegdName = regdname;
        this.StableName = stablename;
        this.Sex = sex;
        this.Height = height;
        this.Foaled = foaled;
        this.Colour = colour;
        this.Studbook = studbook;
    }
}
