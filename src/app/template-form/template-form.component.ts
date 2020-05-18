import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //java NgForm frm;
  //ts   frm : NgForm
  //ts   age : number
  sendData(frm : NgForm){
    if(frm.valid)
    console.log('Get Data',frm.value)
    else
    console.log('Please enter detail')

  }
}
