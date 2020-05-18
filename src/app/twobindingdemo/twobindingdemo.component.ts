import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twobindingdemo',
  templateUrl: './twobindingdemo.component.html',
  styleUrls: ['./twobindingdemo.component.css']
})
export class TwobindingdemoComponent implements OnInit {

  counter=1
  
  constructor() { }

  ngOnInit(): void {
  }

}
