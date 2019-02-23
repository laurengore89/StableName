import { Studbook, Colour, Sex } from '../enums';
import { Height } from './';

export class Horse {
    public RegdName: string;
    public StableName: string;
    public Sex: Sex;
    public Height: Height;
    public Foaled: number;
    public Colour: Colour;
    public Studbook: Studbook;

    constructor(regdname: string, stablename: string, sex: Sex, height: Height, foaled: number, colour: Colour, studbook: Studbook) {
        this.RegdName = regdname;
        this.StableName = stablename;
        this.Sex = sex;
        this.Height = height;
        this.Foaled = foaled;
        this.Colour = colour;
        this.Studbook = studbook;
    }

    public PrintHeight() {
        if (!this.Height.Hands) {
            return '';
        }
// tslint:disable-next-line: max-line-length
        return this.Height.Hands + '.' + Math.floor(this.Height.Inches) + (this.Height.Inches === Math.floor(this.Height.Inches) ? '' : ' and ' + (this.Height.Inches - Math.floor(this.Height.Inches)));
    }

    public Age() {
        if (!this.Foaled) {
            return 0;
        }
        return Math.floor((new Date().getTime() - new Date(this.Foaled, 1, 1).getTime()) / (1000 * 60 * 60 * 24 * 365.26));
    }

    public BaseDescriptor() {
        return Colour[this.Colour].toLocaleLowerCase() + ' ' + Sex[this.Sex].toLocaleLowerCase();
    }
}
