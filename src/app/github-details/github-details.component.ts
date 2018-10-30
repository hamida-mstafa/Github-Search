import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubService} from '../githubs/github.service';
// import 'rxjs/add/operator/map'

@Component({
  selector: 'app-github-details',
  templateUrl: './github-details.component.html',
  styleUrls: ['./github-details.component.css'],
  })

export class GithubDetailsComponent implements OnInit {
  result$:any;
  show$;
   constructor(public service: GithubService, private http: HttpClient ) {}
   search(input){
     this.http.get('https://api.github.com/users/' + input.value).subscribe( data => {
       this.result$ = data;
       console.log(data);
     });
     this.http.get('https://api.github.com/users/' + input.value + '/repos') .subscribe(data => {
      this.show$ = data;
      console.log(data);
    });
   }

  ngOnInit(){
  }

}
