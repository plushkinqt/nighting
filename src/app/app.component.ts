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

    ngOnInit() {

    }
}
