import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodolistInMemoryService {

  tasklist = [
    { taskName: 'Task1', complate: false },
    { taskName: 'Task2', complate: true },
    { taskName: 'Task3', complate: false },
  ]

  constructor() { }

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
}
