import { Injectable } from '@angular/core';

@Injectable()
export class MatchService {

  constructor() { }

  getMatch(userData1: any, userData2: any) {
    let sleepTotals = 0;
    let user1 = {
      avgScore: 0,
      avgAwake: 0,
      rem: 0,
      deep: 0,
      light: 0,
      duration: 0
    };
    let user2 = {
      avgScore: 0,
      avgAwake: 0,
      rem: 0,
      deep: 0,
      light: 0,
      duration: 0
    };

    userData1.sleep.forEach((sleep, index) => {
      let diffpercent = this.compare(sleep.duration, userData2.sleep[index].duration);
      let awakepercent = this.compare(sleep.awake, userData2.sleep[index].awake);
      let effpercent = this.compare(sleep.efficiency, userData2.sleep[index].efficiency);
      let scorepercent = this.compare(sleep.score, userData2.sleep[index].score);

      sleepTotals += (diffpercent + awakepercent + effpercent + scorepercent) / 4;

      user1.avgScore += parseInt(sleep.score || 0);
      user2.avgScore += parseInt(userData2.sleep[index].score || 0);

      user1.avgAwake += parseInt(sleep.awake || 0);
      if (userData2.sleep[index].awake) {
        user2.avgAwake += parseInt(userData2.sleep[index].awake || 0);
      }

      user1.rem += parseInt(sleep.rem || 0);
      if (userData2.sleep[index].rem) {
        user2.rem += parseInt(userData2.sleep[index].rem || 0);
      }

      user1.deep += parseInt(sleep.deep || 0);
      if (userData2.sleep[index].deep) {
        user2.deep += parseInt(userData2.sleep[index].deep || 0);
      }

      user1.light += parseInt(sleep.light || 0);
      if (userData2.sleep[index].light) {
        user2.light += parseInt(userData2.sleep[index].light || 0);
      }

      user1.duration += parseInt(sleep.duration || 0);
      if (userData2.sleep[index].duration) {
        user2.duration += parseInt(userData2.sleep[index].duration || 0);
      }
    });

    user1.avgScore = user1.avgScore / (userData1.sleep.length);
    user2.avgScore = user2.avgScore / (userData2.sleep.length);

    user1.avgAwake = user1.avgAwake / userData1.sleep.length;
    user2.avgAwake = user2.avgAwake / userData2.sleep.length;

    user1.rem = user1.rem / userData1.sleep.length;
    user2.rem = user2.rem / userData2.sleep.length;

    user1.deep = user1.deep / userData1.sleep.length;
    user2.deep = user2.deep / userData2.sleep.length;

    user1.light = user1.light / userData1.sleep.length;
    user2.light = user2.light / userData2.sleep.length;

    user1.duration = user1.duration / userData1.sleep.length;
    user2.duration = user2.duration / userData2.sleep.length;

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
