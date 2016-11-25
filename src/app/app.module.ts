import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { OAuthService } from 'angular2-oauth2/oauth-service';

import { AppComponent } from './app.component';
import { ScrollerComponent } from './scroller/scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      AuthService,
      OAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
