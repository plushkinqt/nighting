import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from "@angular/http";

@Injectable()
export class OuraAPIManager {

  private apiserver = 'https://api.ouraring.com/v1/userinfo?access_token=';

  constructor(private http: Http) { }

  getPersonalInfo(access_token: string) {

    let url = this.apiserver + access_token;

    if (access_token) {
      console.log(access_token);

      let headers = new Headers({});

      let options = new RequestOptions({ headers: headers });

      return this.http.get('https://api.ouraring.com/v1/userinfo?access_token=' + access_token, options)
        .map((res) => {
            let data = res.json();
            return data;
        })
        .subscribe((data: any) => {
            console.log("oura-apimanager returns", data);
        });
    }

  }
}
