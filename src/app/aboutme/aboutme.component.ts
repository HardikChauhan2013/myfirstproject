import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  message="this is message from component/class";
  age=55;

  ngOnInit(): void {
  }

  buttonClick(e){
    alert('Hi button clicked ' + e) 
  }
  
  buttonClickForDynamic(e){
    console.log(e);
    console.log(e.target.innerHTML); 
    alert('Hi button clicked ' + e.target.innerHTML) 
  }

  getDataFromTextBox(e){
    console.log(e);
    //alert(e.target.value);
    this.message = e.target.value;
  }
}
