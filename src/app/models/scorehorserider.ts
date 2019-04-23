import { Score } from './score';
import { Horse } from './horse';
import { Rider } from './rider';

export class ScoreHorseRider {
    public score: Score;
    public horse: Horse;
    public rider: Rider;

    constructor(score: Score) {
      this.score = score;
    }
}
