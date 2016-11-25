import {Component, OnInit} from '@angular/core';
import {OAuthService} from "angular2-oauth2/oauth-service";
import {environment} from "../environments/environment";
import {URLSearchParams, Http} from "@angular/http";
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'Nighting!';

    constructor(private oauthService: OAuthService,
                private http: Http,
                private authService: AuthService) {}

    ngOnInit() {
        // Login-Url
        this.oauthService.loginUrl = "https://api.ouraring.com/oauth/authorize";

        // URL of the SPA to redirect the user to after login
        this.oauthService.redirectUri = window.location.origin;

        // The SPA's id. Register SPA with this id at the auth-server
        this.oauthService.clientId = environment.clientId;

        // The name of the auth-server that has to be mentioned within the token
        this.oauthService.issuer = "https://api.ouraring.com";

        // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
        // OAuth2-based access_token
        this.oauthService.oidc = true;

        // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
        // instead of localStorage
        this.oauthService.setStorage(sessionStorage);

        // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
        this.oauthService.logoutUrl = "https://api.ouraring.com/oauth/authorize";

        // This method just tries to parse the token within the url when
        // the auth-server redirects the user back to the web-app
        // It dosn't initiate the login
        this.oauthService.tryLogin({});

    }

    public login() {
        this.oauthService.initImplicitFlow();
    }

    public isLoggedIn() {
        // Check if the user is logged in
        return this.authService.isLoggedIn();
    }
}
