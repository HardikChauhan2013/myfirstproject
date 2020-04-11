import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition-demo',
  templateUrl: './condition-demo.component.html',
  styleUrls: ['./condition-demo.component.css']
})
export class ConditionDemoComponent implements OnInit {

  isSave=true;

  counterValue=0;

  langList =["Java","JavaScript","NodeJS","C#"]


  constructor() { }

  ngOnInit(): void {
  }

}
