import { Injectable } from '@angular/core';

@Injectable()
export class MatchService {

  constructor() { }

  getMatch(userData1: any, userData2: any) {
    console.log(userData1, userData2);

    let bedtimeStart1 = userData1.sleep[0].bedtime_start;
    let bedtimeStart2 = userData2.sleep[0].bedtime_start;

    console.log("bedtime", bedtimeStart1, bedtimeStart2);

    return 99;
  }

}
