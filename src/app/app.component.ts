import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  account: {email: string, password: string} = {
    email: '',
    password: ''
  };
  token;
  constructor(private http: HttpClient,private router: Router) {
    
    this.token=localStorage.getItem('token');
    if(this.token){
      this.router.navigateByUrl('/Users');
    }

  }
  title = 'app';
  error = 0;

  dologin(){
    //let options = new RequestOptions({ headers: headers });
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    this.http.post(
        'http://localhost:8000/api/authenticate',
        this.account,
        options
    ).map(
        (res: Response) => res
    ).subscribe(
        (res) => {



          if(!res['token']){
            this.error =1;
          }else{
            localStorage.setItem('token',res['token'] );
            this.token = res['token'];
            this.router.navigateByUrl('/Users');

          }
        },
        (x) => {
          this.error =1;
        },
        () => {

          //completed
        }
    );
  }





}
