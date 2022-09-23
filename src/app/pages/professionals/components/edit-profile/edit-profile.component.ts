import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../model/user.interface';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  form!:FormGroup
  constructor(@Inject(MAT_DIALOG_DATA)public data:User, private dialogRef:MatDialogRef<EditProfileComponent>) { }

  ngOnInit(): void {
      this.form = new FormGroup({
        name: new FormControl(this.data? this.data.name:'',Validators.required),
        domain: new FormControl(this.data? this.data.domain:'',),
        gender: new FormControl(this.data? this.data?.gender:''),
        date_of_birth:new FormControl(this.data? this.data.date_of_birth:''),
        phone_number: new FormControl(this.data?this.data.phone_number:'',[Validators.maxLength(10),Validators.minLength(10)]),
        location:new FormControl(this.data?this.data.location:'')
      })
  }

  submit(){
    this.dialogRef.close({data:this.form.value,submit:true})
  }

}
