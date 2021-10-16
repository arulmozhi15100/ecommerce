import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postData(data : any){
    return this.http.post<any>("http://localhost:3000/userDetails",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getData(data:any){
    return this.http.get<any>("http://localhost:3000/userDetails",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateData(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/userDetails"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getUserDetails(email:string){
    return this.http.get<any>("http://localhost:3000/userDetails?email="+email)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
