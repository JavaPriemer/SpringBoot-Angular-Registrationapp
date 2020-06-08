import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users:any
  email:string;
  constructor(private service:UserRegistrationService) { }

  public deleteUser(id:number){
    let response=this.service.cancelUser(id);
    response.subscribe((data)=>this.users=data);
  }
   public findUserByEmailId(email:string){
    let response=this.service.getUsersByEmail(this.email)
    response.subscribe((data)=>this.users=data);
  }

  ngOnInit(): void {
    let response=this.service.getUsers();
    response.subscribe((data)=>this.users=data);
  }

}
