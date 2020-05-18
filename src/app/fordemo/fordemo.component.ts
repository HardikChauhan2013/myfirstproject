import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {

  counterValue=0;

  langList =["Java","JavaScript","NodeJS","C#"];

  langDetailList = [
    {langName:"JavaScript",support:"client/server"},
    {langName:"Java",support:"server"},
    {langName:"C#",support:"server"},
  ];

  menu=[
    {name:"Book",list:[
      {name:"Java",price:100},
      {name:"Java Script",price:200},
    ]},
    {name:"Mobile",list:[
      {name:"Samsung",price:100},
      {name:"Apple",price:200},
    ]}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
