import { Injectable } from '@angular/core';

@Injectable()
export class MatchService {

  constructor() { }

  getMatch(userData1: any, userData2: any) {
    console.log(userData1, userData2);

    if (userData1.$key == userData2.$key) {
      return -1;
    }

    return 99;
  }

}
