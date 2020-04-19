import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms'
import { TodolistInMemoryService } from '../todolist-in-memory.service'
import { TodolistInDBService } from '../todolist-in-db.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  frm = new FormGroup({
    id: new FormControl(0),
    taskName: new FormControl('', Validators.required),
    complate: new FormControl(),
  })

  //constructor(@Inject(TodolistInMemoryService) public inMemoryService: TodolistInMemoryService) { }
  constructor(@Inject(TodolistInDBService) public inDBService: TodolistInDBService) { }

  ngOnInit(): void {
    this.inDBService.getAll();
  }

  saveData() {
    if (this.frm.valid === true) {
      //store in DB
      this.inDBService.findTask(this.frm.value).then(response => {
        //if (this.inMemoryService.findTask(this.frm.value) == true) {
        console.log(response)
        if (response) {
          this.inDBService.updateTask(this.frm.value)
        } else {
          this.inDBService.addTask(this.frm.value);
        }
        this.frm.reset();
        alert('Task Saved')

      })

    }
    else {
      alert('Please fill form');
    }
  }

  fillForm(selecteItem) {
    this.frm.setValue(selecteItem);
  }

}
