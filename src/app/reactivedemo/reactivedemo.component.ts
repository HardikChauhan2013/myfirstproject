import { Component, OnInit } from '@angular/core';

import {NgForm,FormGroup,FormControl,Validators} from '@angular/forms'

//Step 1: Add line src\app\app.module.ts
//import { ReactiveFormsModule } from '@angular/forms';
// imports: [
//   // other imports ...
//   ReactiveFormsModule
// ],

@Component({
  selector: 'app-reactivedemo',
  templateUrl: './reactivedemo.component.html',
  styleUrls: ['./reactivedemo.component.css']
})
export class ReactivedemoComponent implements OnInit {

  frm = new FormGroup({
    username:new FormControl("",[
      Validators.required,
      Validators.minLength(5)
    ]),
    password:new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  saveData(){

    //this.frm.hasError('required')
    //this.frm.controls['username'].hasError('required')
    //this.frm.controls['username'].invalid

    if(this.frm.valid)
    console.log(this.frm.value);
    else
    console.log('Invalid Data')
  }

}
