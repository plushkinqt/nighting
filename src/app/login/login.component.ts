import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() title: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  public login(email: string, password: string) {
    this.authService.login(email, password);
  }
}
