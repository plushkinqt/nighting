import { Injectable } from '@angular/core';

@Injectable()
export class MatchService {

  constructor() { }

  getMatch(userData1: any, userData2: any) {
    let sleepTotals = 0;
    let user1 = {
      agvScore: 0,
      avgAwake: 0,
      rem: 0,
      deep: 0
    };
    let user2 = {
      agvScore: 0,
      avgAwake: 0,
      rem: 0,
      deep: 0
    };

    userData1.sleep.forEach((sleep, index) => {
      let diffpercent = this.compare(sleep.duration, userData2.sleep[index].duration);
      let awakepercent = this.compare(sleep.awake, userData2.sleep[index].awake);
      let effpercent = this.compare(sleep.efficiency, userData2.sleep[index].efficiency);
      let scorepercent = this.compare(sleep.score, userData2.sleep[index].score);

      sleepTotals += (diffpercent + awakepercent + effpercent + scorepercent) / 4;

      user1.agvScore += sleep.score;
      user2.agvScore += userData2.sleep[index].score;

      user1.avgAwake += sleep.awake;
      if (userData2.sleep[index].awake) {
        user2.avgAwake += userData2.sleep[index].awake;
      }

      user1.rem += sleep.rem;
      if (userData2.sleep[index].rem) {
        user2.rem += userData2.sleep[index].rem;
      }

      user1.deep += sleep.deep;
      if (userData2.sleep[index].deep) {
        user2.deep += userData2.sleep[index].deep;
      }
    });

    user1.agvScore = user1.agvScore / (userData1.sleep.length);
    user2.agvScore = user2.agvScore / (userData2.sleep.length);

    user1.avgAwake = user1.avgAwake / userData1.sleep.length;
    user2.avgAwake = user2.avgAwake / userData2.sleep.length;

    user1.rem = user1.rem / userData1.sleep.length;
    user2.rem = user2.rem / userData2.sleep.length;

    user1.deep = user1.deep / userData1.sleep.length;
    user2.deep = user2.deep / userData2.sleep.length;


    return {
      'match': (sleepTotals / (userData1.sleep.length) * 100),
      user1: user1,
      user2: user2
    };
  }

  compare(value1, value2) {
    let diff = Math.abs(value1 - value2);

    if (value1 == value2)
      return 1;

    if (value1 == null || value2 == null)
      return 0;

    return 1 - (value1 > value2 ? diff / value1 : diff / value2);
  }

}
