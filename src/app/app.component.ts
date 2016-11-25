import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { URLSearchParams, Http } from "@angular/http";

import { OAuthService } from "angular2-oauth2/oauth-service";

import { AuthService } from "./services/auth.service";
import { environment } from "../environments/environment";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    constructor(private oauthService: OAuthService,
                private http: Http,
                private authService: AuthService,
                //private route: ActivatedRoute,
                ) {}

    private title = 'Nighting!';
    private access_token: string;

    ngOnInit() {
        // Login-Url
        this.oauthService.loginUrl = "https://api.ouraring.com/oauth/authorize";

        // URL of the SPA to redirect the user to after login
        this.oauthService.redirectUri = "http://localhost:4200";

        // The SPA's id. Register SPA with this id at the auth-server
        this.oauthService.clientId = environment.clientId;

        // The name of the auth-server that has to be mentioned within the token
        this.oauthService.issuer = "https://api.ouraring.com";

        // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
        // OAuth2-based access_token
        this.oauthService.oidc = false; //put token to 'code' instead of some shit

        // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
        // instead of localStorage
        this.oauthService.setStorage(sessionStorage);

        // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
        this.oauthService.logoutUrl = "https://api.ouraring.com/oauth/authorize";

        // This method just tries to parse the token within the url when
        // the auth-server redirects the user back to the web-app
        // It dosn't initiate the login

        //this.oauthService.tryLogin({});

        this.oauthService.tryLogin({
            validationHandler: context => {
                var search = new URLSearchParams();
                search.set('token', 'code');
                search.set('response_type', 'code');
                return this.http.get(this.oauthService.loginUrl, {search});
            }
        });

        /*this.route.params.subscribe((d) => {
          console.log("params", d);

          this.access_token = this.route.snapshot.params['access_token'];

          console.log("access_token", this.access_token);
        });*/

    }

    public login() {
        this.oauthService.initImplicitFlow();
    }

    public isLoggedIn() {
        // Check if the user is logged in
        return this.authService.isLoggedIn();
    }
}
