import { Legmarking } from '../enums';

export class Legs {
    public nearfore: Legmarking;
    public offfore: Legmarking;
    public offhind: Legmarking;
    public nearhind: Legmarking;

    constructor(abbreviated: string) {
        if (abbreviated.length !== 4) {
            return;
        }
        this.nearfore = Legmarking[abbreviated[0]];
        this.offfore = Legmarking[abbreviated[1]];
        this.offhind = Legmarking[abbreviated[2]];
        this.nearhind = Legmarking[abbreviated[3]];
    }
}
