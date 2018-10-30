import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GithubService} from './githubs/github.service'

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';

import { RouterModule, Routes } from '@angular/router';
import { GithubDetailsComponent } from './github-details/github-details.component';

// const routes: Routes = [
//   {path: 'find', component: GithubDetailsComponent}                 ,
//   {path: 'search', component: GithubComponent},
//   {path: '', redirectTo: '/search', pathMatch: 'full'},
// ];

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
