import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {UserService} from '../user.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
  providers: [  UserService ],
})
export class AllUsersComponent implements OnInit {
  users;
  token;
  constructor(private router: Router,private user : UserService){ }

  ngOnInit() {
    this.token=localStorage.getItem('token');
    if(!this.token){
      this.router.navigateByUrl('/');
    }
     this.user.allUsers().subscribe(data => {

       this.users = data;

      });

  }


}


