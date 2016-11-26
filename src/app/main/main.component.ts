import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from "../../environments/environment";

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URLSearchParams, Headers, Http, Response, RequestOptions } from "@angular/http";

import { AuthService } from "../services/auth.service";
import { OAuthService } from "angular2-oauth2/oauth-service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private title = 'Nighting!';
  private access_token: string;

  constructor(private oauthService: OAuthService,
            private authService: AuthService,
            private http: Http,
            private route: ActivatedRoute) { }

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
                search.set('response_type', 'code');
                return this.http.get(this.oauthService.loginUrl, {search});
            }
        });

        this.route.queryParams.subscribe((d) => {
          this.access_token = d['access_token'];

          console.log("access_token", this.access_token);

          let headers = new Headers({
            'Access-Control-Allow-Origin': 'localhost:4200',
            'Allow-Origin': 'localhost:4200'
          });

          /* TODO: fix request!
            XHRRequest on browser is not allowed AND
            OPTIONS request is not allowed */

          let options = new RequestOptions({ headers: headers });

          let url = 'https://api.ouraring.com/v1/userinfo?access_token=' + this.access_token;

          if (this.access_token) {
            console.log(this.access_token);
              /*let headers = new Headers({
                  'Authorization' : 'Bearer ' + this.access_token
              });
              let options = new RequestOptions({ headers: headers });

              this.http.get('https://api.ouraring.com/v1/userinfo?access_token=' + this.access_token, options)
                .map((res) => {
                    let data = res.json();
                    return data;
                })
                .subscribe((data: any) => {
                    console.log(data);
                });*/
          }

        });
  }


  public login() {
      this.oauthService.initImplicitFlow();
  }

  public isLoggedIn() {
    return !!this.access_token;
  }

}
