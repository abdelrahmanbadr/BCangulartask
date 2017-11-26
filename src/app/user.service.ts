import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  users;
  token;
  autorization;
  constructor(private http: HttpClient){
    this.token=localStorage.getItem('token');
    this.autorization =  { Authorization: 'Bearer '+this.token }
  }
  allUsers()
  {

    return this.http.get('http://localhost:8000/api/users',{ headers: this.autorization});

  }

  showUser(id)
  {

    return this.http.get('http://localhost:8000/api/users/'+id,{ headers: this.autorization});
  }


}