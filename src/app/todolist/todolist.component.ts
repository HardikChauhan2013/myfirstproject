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
    id: new FormControl(),
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

  sortData() {
    console.log('SortData Done')
    this.inDBService.sortData('number');
  }

  showPage(pageIndex) {
    console.log(pageIndex);
    // page 0 : 0, 1
    // page 1 : 2, 3
    // page 2 : 4, 5
    var startIndex = pageIndex * 2;
    var endIndex = startIndex + 1;

    console.log(pageIndex, startIndex, endIndex);
    this.inDBService.pageData(startIndex, endIndex);

  }

}
