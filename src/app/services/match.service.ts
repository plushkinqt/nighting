import { Injectable } from '@angular/core';

@Injectable()
export class MatchService {

  constructor() { }

  getMatch(userData1: any, userData2: any) {
    console.log(userData1, userData2);

    let sleepTotals = 0;

    userData1.sleep.forEach((sleep, index) => {
      let sleepDuration1 = sleep.duration;
      let sleepDuration2 = userData2.sleep[index].duration;

      let durationDiff = Math.abs(sleepDuration1 - sleepDuration2);

      // 0 diffpercent is perfect match since no difference in durations
      let diffpercent = 1 - (sleepDuration1 > sleepDuration2 ? durationDiff / sleepDuration1 : durationDiff / sleepDuration2);

      console.log("diffpercent", diffpercent);

      // compare with others
      let awakepercent = 0.5;
      let effpercent = 0.5;
      let scorepercent = 0.5;

      let total = (diffpercent + awakepercent + effpercent + scorepercent) / 4

      total = diffpercent;

      sleepTotals += total;

    });

    return sleepTotals/(userData1.sleep.length) * 100;
  }

}
