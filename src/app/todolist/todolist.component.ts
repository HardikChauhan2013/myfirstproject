import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms'
import { TodolistInMemoryService } from '../todolist-in-memory.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  frm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    complate: new FormControl(),
  })

  constructor(@Inject(TodolistInMemoryService) public inMemoryService: TodolistInMemoryService) { }

  ngOnInit(): void {
  }

  saveData() {
    if (this.frm.valid === true) {
      //store in DB
      if (this.inMemoryService.findTask(this.frm.value) == true) {
        this.inMemoryService.updateTask(this.frm.value)
      } else {
        this.inMemoryService.addTask(this.frm.value);
      }
      this.frm.reset();
      alert('Task Saved')
    }
    else {
      alert('Please fill form');
    }
  }

  fillForm(selecteItem) {
    this.frm.setValue(selecteItem);
  }

}
