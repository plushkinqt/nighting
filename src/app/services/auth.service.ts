import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FirebaseAuth } from 'angularfire2';

@Injectable()
export class AuthService {

    constructor(private af: AngularFire,
                public auth: FirebaseAuth) {
    }

    public login(email: string, password: string) {
        this.af.auth.login({ email: email, password: password });
    }

    public logout() {
        this.af.auth.logout();
    }

    public isLoggedIn() {
        return !!this.auth.getAuth();
    }
}
