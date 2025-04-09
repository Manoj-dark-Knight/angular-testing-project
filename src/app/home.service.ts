import { Injectable } from '@angular/core';
import {Http} from '@angular/Http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http: Http) { }

  getUsersData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  };
}
