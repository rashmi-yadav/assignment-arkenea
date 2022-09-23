import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../model/user.interface';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent implements OnInit {
  data:User = {
    name: "Mary, Jason & Hodge of Attorney",
    domain: "www.mjhattorenys.com",
    gender: "Male",
    date_of_birth: new Date("06/08/1979"),
    phone_number: "8654321234",
    location: "12 street, Silicon Valley, Avenue NE, Huntsville"
  }
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  returnZero() {
    return 0
  }

  editProfile(){
    this.dialog.open(EditProfileComponent,{
      width:'500px',
      data:this.data
    }).afterClosed().subscribe(
      ((v:{data:User,submit:boolean}) => {
        if(v?.submit){
          this.data = v.data
        }
      }))
    }

}
