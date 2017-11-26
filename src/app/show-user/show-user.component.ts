import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css'],
  providers: [  UserService ],
})
export class ShowUserComponent implements OnInit {
  id: number;
  private sub: any;
  user; token;
  constructor(private route: ActivatedRoute,private router: Router,public UserModel : UserService) { }

  ngOnInit() {
    this.token=localStorage.getItem('token');

    if(!this.token){
      this.router.navigateByUrl('/');
    }

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.UserModel.showUser(this.id).subscribe(data => {
      this.user = data;
    });
  }



}
