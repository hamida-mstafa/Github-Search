import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';
import { reject } from 'q';
import { resolve } from 'url';
import { environment } from '../../environments/environment';

@ Injectable({
  providedIn: 'root'
})
export class GithubService {
  user:User;
  repo$ : any

  private username:string;

  constructor(private http: HttpClient) {
    this.user = new User('');
    this.repo$ = new Repo('');
  }
  
  // getUser(){
  //   interface ApiResponse{
  //     login: string;
  //   }
  //
  //   const promise = new Promise(((resolve, reject) => {
  //     this.http.get<ApiResponse>('https://api.github.com/users/hamida-mstafa?access_token=' +'5178c6b3e395a8e01a6b6858989a559af75b4134')
  //     .toPromise().then(response => {
  //       this.user.username = response.login;
  //       console.log(response)
  //     },
  //     error => {
  //
  //       reject(error);
  //     });
  //   } ));
  //   return promise;
  //
  // }
  // getUserRepos(){
  // this.http.get('https://api.github.com/users/hamida-mstafa/repos').subscribe(data=>{
  //   this.repo$ = data
  // })
  // console.log(data)
  }
}
