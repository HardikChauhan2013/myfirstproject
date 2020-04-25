import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-slider',
  templateUrl: './counter-slider.component.html',
  styleUrls: ['./counter-slider.component.css']
})
export class CounterSliderComponent implements OnInit {

  constructor(public cService: CounterService) { }

  ngOnInit(): void {
  }

}
