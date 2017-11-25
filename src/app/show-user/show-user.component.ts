import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  id: number;
  private sub: any;
  user; token;
  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.token=localStorage.getItem('token');

    if(!this.token){
      this.router.navigateByUrl('/');
    }

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.showUser();
  }

  showUser()
  {

    let  autorization =  { Authorization: 'Bearer '+this.token }


    this.http.get('http://localhost:8000/api/users/'+this.id,{ headers: autorization}).subscribe(data => {
      this.user = data;

    });
  }


}
