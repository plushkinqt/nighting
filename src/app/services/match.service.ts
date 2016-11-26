import { Injectable } from '@angular/core';

@Injectable()
export class MatchService {

  constructor() { }

  getMatch(userData1: any, userData2: any) {
    console.log(userData1, userData2);

    let sleepTotals = 0;
    let agvScore1 = 0;
    let agvScore2 = 0;

    userData1.sleep.forEach((sleep, index) => {
      let diffpercent = this.compare(sleep.duration, userData2.sleep[index].duration);
      let awakepercent = this.compare(sleep.awake, userData2.sleep[index].awake);
      let effpercent = this.compare(sleep.efficiency, userData2.sleep[index].efficiency);
      let scorepercent = this.compare(sleep.score, userData2.sleep[index].score);

      sleepTotals += (diffpercent + awakepercent + effpercent + scorepercent) / 4;

      agvScore1 += sleep.score;
      agvScore2 += userData2.sleep[index].score;
    });

    agvScore1 = agvScore1/(userData1.sleep.length);
    agvScore2 = agvScore2/(userData2.sleep.length);

    return {
      "agvScore1": agvScore1,
      "agvScore2": agvScore2,
      "match": sleepTotals/(userData1.sleep.length) * 100
    };
  }

  compare(value1, value2) {
    let diff = Math.abs(value1 - value2);

    if (value1 == value2)
      return 1;

    if (value1 == null || value2 == null)
      return 0;

    return 1 - (value1 > value2 ? diff / value1 : diff / value2);
  }

}
