import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service.ts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeService],
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  Users: any;

  constructor(homeService: HomeService){}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(evt){
    this.homeService.getUserData().subscribe(res => {
      console.log(res);
      this.Users = res;
    })
  }
}
