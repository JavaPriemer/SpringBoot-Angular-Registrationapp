import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user){
    return this.http.post("http://localhost:8080/save",user,{responseType:'text' as 'json'})
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/users");
  }

  public getUsersByEmail(email){
    return this.http.get("http://localhost:8080/user/"+email);
  }

  public cancelUser(id){
    return this.http.delete("http://localhost:8080/cancel/"+id);
  }
}
