import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter-child-input',
  templateUrl: './counter-child-input.component.html',
  styleUrls: ['./counter-child-input.component.css']
})
export class CounterChildInputComponent implements OnInit {

  @Input('cvalue')
  countervalue = 0;

  constructor() { }


  ngOnInit(): void {
  }

}
