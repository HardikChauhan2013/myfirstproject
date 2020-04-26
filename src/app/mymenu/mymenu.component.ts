import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mymenu',
  templateUrl: './mymenu.component.html',
  styleUrls: ['./mymenu.component.css']
})
export class MymenuComponent implements OnInit {

  @Input()
  menuitem = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.menuitem)
  }

}
