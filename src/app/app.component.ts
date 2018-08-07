import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './firebase.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private firebase:FirebaseService){}
  title = 'firebase';
      
  setData(){
    this.firebase.setJson().subscribe(res=>{
      console.log("save in Json "+JSON.stringify(res));
    },
  err=>{
    console.log(err);
  })  
  }
  ngOnInit(){
    this.firebase.getJson().subscribe(res=>{
      console.log("get from json "+JSON.stringify(res));
    },
  err=>{
    console.log(err);
  })
}
  }

