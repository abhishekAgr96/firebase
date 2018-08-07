import { Injectable } from '@angular/core';
import  {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private httpClient:HttpClient) { }
  detail={
    id:1,
    name:"abhishek",
    mobile:7611885152,
    empId:6113,
    password:1234
  }
  getJson():Observable<any>{
    return this.httpClient.get("https://signup-f173d.firebaseio.com/detail.json").pipe(map(data=>data));
  }
  setJson(){
    return this.httpClient.post("https://signup-f173d.firebaseio.com/detail.json",this.detail);
  }
}
