import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FirebaseAuth } from 'angularfire2';

@Injectable()
export class AuthService {

  private uid: string;

  constructor(private af: AngularFire,
              public auth: FirebaseAuth) {
    this.auth.subscribe((state) => {
      console.log("subscribed to auth", state);
      if (state != null)
        this.uid = state.uid;
    })
  }

  public login(email: string, password: string) {
    this.auth.login({ email: email, password: password });
  }

  public logout() {
    this.auth.logout();
  }

  public getUid() {
    return this.uid;
  }

  public isLoggedIn() {
    return !!this.getUid();
  }
}
