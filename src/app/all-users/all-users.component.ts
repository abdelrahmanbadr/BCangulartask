import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users;
  token;
  constructor(private http: HttpClient,private router: Router){ }

  ngOnInit() {
    this.token=localStorage.getItem('token');
    if(!this.token){
      this.router.navigateByUrl('/');
    }
    this.allUsers();

  }

  allUsers()
  {

    let  autorization =  { Authorization: 'Bearer '+this.token }


    this.http.get('http://localhost:8000/api/users',{ headers: autorization}).subscribe(data => {
      this.users = data;
      console.log(this.users)
    });
  }

}


