import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tasklist = [
    { taskName: 'Task1', complate: false },
    { taskName: 'Task2', complate: true },
    { taskName: 'Task3', complate: false },
  ]

  frm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    complate: new FormControl(),
  })

  constructor() { }

  ngOnInit(): void {
  }

  saveData() {
    if (this.frm.valid === true) {
      //store in DB
      if (this.findTask(this.frm.value) == true) {
        this.updateTask(this.frm.value)
      } else {
        this.addTask(this.frm.value);
      }
      this.frm.reset();
      alert('Task Saved')
    }
    else {
      alert('Please fill form');
    }
  }

  //Business logic (es6)
  deleteTask(selectedItem) {
    this.tasklist = this.tasklist.filter(item => item.taskName != selectedItem.taskName);
  }

  //Business logic
  addTask(selectedItem) {
    this.tasklist.push(selectedItem);
  }

  //Buniess logic
  updateTask(selecteItem) {
    for (let i = 0; i < this.tasklist.length; i++) {
      if (this.tasklist[i].taskName == selecteItem.taskName) {
        this.tasklist[i] = selecteItem;
      }
    }
  }

  //Buniess logic (old style code)
  // findTask(selecteItem) {
  //   for (let i = 0; i < this.tasklist.length; i++) {
  //     if (this.tasklist[i].taskName == selecteItem.taskName) {
  //       //going to update record
  //       return true;
  //     }
  //   }
  //   return false; //going to create new task
  // }

  //Buniess logic (es6 js)
  findTask(selecteItem) {
    return this.tasklist.some(item => item.taskName == selecteItem.taskName);
  }

  fillForm(selecteItem) {
    this.frm.setValue(selecteItem);
  }

}
