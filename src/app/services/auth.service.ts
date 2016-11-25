import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
  }

  public isLoggedIn () {
    let token = sessionStorage.getItem('nighting-user-token');

    return token && token.length > 0 ? true : false;
  }

}
