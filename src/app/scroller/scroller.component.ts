import { Component, OnInit, Input } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent implements OnInit {

  private userData: FirebaseObjectObservable<any>;

  private matchUserData: FirebaseObjectObservable<any>;

  @Input() access_token;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    let uid = 'user1';

    let matchuid = 'user2';

    this.userData = this.af.database.object(`users/${uid}`);

    this.matchUserData = this.af.database.object(`users/${matchuid}`);

    console.log(this.userData);

    this.userData.subscribe((d) => console.log("got userData", d));
  }

  public acceptMatch() {
    console.log('Match accepted!');
  }

  public nextMatch() {
    console.log('Fetching next match...');
  }

}
