import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private isLoginError = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  public login(email: string, password: string) {
    this.authService.login(email, password)
        .catch((err) => {
          this.isLoginError = true;
          console.error(err);
        });
  }
}
