import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//int i;
//i : number
  saveData(frm:NgForm){
    if(frm.valid)
     console.log('Save Data ',frm.value);
    else{
      console.log('Invalid data')  
    }
  
  }

}
