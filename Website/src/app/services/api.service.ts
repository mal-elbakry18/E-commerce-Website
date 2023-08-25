import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
    getProduct(){

      return this.http.get<any>("http://localhost:8080/web/products")
      .pipe(map((res:any)=>{
        return res;
      }))
    }


    getUser(){
      return this.http.get("http://localhost:8080/admin/users/all")
    }

    addUser(data: any){
      return this.http.post("http://localhost:8080/web/users", data);
    }
    


}
