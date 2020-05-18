import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingdemo',
  templateUrl: './bindingdemo.component.html',
  styleUrls: ['./bindingdemo.component.css']
})
export class BindingdemoComponent implements OnInit {

  message="this is message from component/class";
  age=55;
  textboxValue=""

  constructor() { }
 
  ngOnInit(): void {
  }

  buttonClick(e){
    alert('Hi button clicked - ' + e) 
  }
  
  buttonClickForDynamic(e){
    console.log(e);
    console.log(e.target.innerHTML); 
    alert('Hi button clicked - ' + e.target.innerHTML) 
  }

  getDataFromTextBox(e){
    console.log(e);
    //alert(e.target.value);
    this.textboxValue = e.target.value;
  }
}
