import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { OAuthService } from 'angular2-oauth2/oauth-service';
import { AngularFireModule,
    FirebaseAppConfig,
    firebaseAuthConfig,
    AuthProviders,
    AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainComponent } from './main/main.component';

import { AuthService } from './services/auth.service';
import { MatchService } from './services/match.service';
import { OuraAPIManager } from './services/oura-apimanager.service';

import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [

  { path: '', component: AppComponent, children: [
    {path: '', component: MainComponent}
  ] },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: NotfoundComponent },
  { path: 'notfound', component: AppComponent },

];

const FIREBASE_CONFIG: FirebaseAppConfig = environment.firebase;
const FIREBASE_AUTH_CONFIG = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    ScrollerComponent,
    NotfoundComponent,
    MainComponent,
    LoginComponent,
    PieChartComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(FIREBASE_CONFIG, FIREBASE_AUTH_CONFIG)
  ],
  providers: [
      AuthService,
      OAuthService,
      MatchService,
      OuraAPIManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
