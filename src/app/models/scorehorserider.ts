import { Score } from './score';
import { Horse } from './horse';
import { Rider } from './rider';

export class ScoreHorseRider {
    public score: Score;
    public horse: Horse;
    public rider: Rider;

    constructor(score: Score, horse: Horse, rider: Rider) {
      this.score = score;
      this.horse = horse;
      this.rider = rider;
    }
}
