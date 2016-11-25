import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { OAuthService } from 'angular2-oauth2/oauth-service';

import { AppComponent } from './app.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [

  { path: '', component: AppComponent, children: [
    {path: '', component: MainComponent}
  ] },
  { path: '**', component: NotfoundComponent },
  { path: 'notfound', component: AppComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    ScrollerComponent,
    NotfoundComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      AuthService,
      OAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
