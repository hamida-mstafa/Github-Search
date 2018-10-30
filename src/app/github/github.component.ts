import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubService} from '../githubs/github.service';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers:[GithubService],
})
export class GithubComponent implements OnInit {
  user;
  repo;

  constructor(public service:GithubService, private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/hamida-mstafa?access_token='+ '5178c6b3e395a8e01a6b6858989a559af75b4134').subscribe(data=>{
    this.user = data
    console.log(data)

  })
  this.http.get('https://api.github.com/users/hamida-mstafa/repos?access_token=' + '5178c6b3e395a8e01a6b6858989a559af75b4134').subscribe(repo=>{
  this.repo = repo
  console.log(repo)
})


    }

  }
