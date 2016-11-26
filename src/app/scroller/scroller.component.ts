import { Component, OnInit, Input } from '@angular/core';

import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent implements OnInit {

  private calculating: boolean = false;
  private loading: boolean = false;

  private currentIndex: number = 0;

  private matchpercent: number;

  private userDataObs: FirebaseObjectObservable<any>;
  private userData: any;

  private allUsersObs: FirebaseListObservable<any>;
  private allUsers: any;

  @Input() access_token;

  constructor(private af: AngularFire, private match: MatchService) { }

  ngOnInit() {
    this.loading = true;

    let uid = 'asdf'; // update with my actual uid

    this.allUsersObs = this.af.database.list('users');

    this.userDataObs = this.af.database.object(`users/${uid}`);

    this.allUsersObs.subscribe((d) => {
      this.allUsers = d;
      this.loading = false;
      this.currentIndex = 0;

      this.findMatchPercent();
    });

    this.userDataObs.subscribe((d) => {
      this.currentIndex = 0;
      this.loading = false;
      this.userData = d;

      this.findMatchPercent();
    });

  }

  private findMatchPercent() {
    if (!this.calculating && this.allUsers && this.userData) {
      let matchUser = this.allUsers[this.currentIndex];

      this.matchpercent = null;

      this.matchpercent = this.match.getMatch(this.userData, matchUser);

      if (this.matchpercent == -1) {
        this.currentIndex++;
        matchUser = this.allUsers[this.currentIndex];
        this.matchpercent = this.match.getMatch(this.userData, matchUser);
      }
    }
  }

  public acceptMatch() {
    console.log('Match accepted!');
  }

  public nextMatch() {
    console.log('Fetching next match...');
    if (this.allUsers && this.allUsers[this.currentIndex + 1]) {
      this.currentIndex++;

      this.findMatchPercent();
    }
    else {
      console.log("could not get another match!");
    }
  }

}
