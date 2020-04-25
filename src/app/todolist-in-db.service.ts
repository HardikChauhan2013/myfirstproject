import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodolistInDBService {

  REST_URL = 'http://localhost:3000/tasklist/'

  constructor(@Inject(HttpClient) private proxy: HttpClient) { }

  tasklist: any = []

  pageData(pageIndex) {

    var startIndex = pageIndex * 2;
    var endIndex = startIndex + 1;

    return this.getAll()
      .then(() => {
        this.tasklist = this.tasklist.filter((item, index) => startIndex <= index && index <= endIndex)
      })
  }

  sortData(columnName) {
    console.log('before sorting: ', this.tasklist);

    if (columnName == 'id') {
      this.tasklist = this.tasklist.sort(sortNumberData);
    }
    else if (columnName == 'taskName' || columnName == 'complate') {
      this.tasklist = this.tasklist.sort(sortStringData);
    }

    function sortNumberData(a, b) {
      return a[columnName] - b[columnName];
    }

    function sortStringData(a, b) {
      if (a[columnName] > b[columnName]) {
        return 1;
      }
      if (a[columnName] < b[columnName]) {
        return -1;
      }
      return 0;
    };

    console.log('after sorting: ', this.tasklist);
  }

  getAll() {
    return this.proxy.get(this.REST_URL).toPromise().then(response => {
      this.tasklist = response;
    })
  }

  //GET BY ID 
  findTask(selecteItem) {
    const id = selecteItem.id;
    //http://localhost:3000/tasklist/2
    return this.proxy.get(this.REST_URL + id).toPromise().then(() => true).catch(() => false);
  }

  //DELETE RECORD
  deleteTask(selectedItem) {
    const id = selectedItem.id;
    //http://localhost:3000/tasklist/2
    //return this.proxy.delete(this.REST_URL + id).toPromise();

    return this.proxy.delete(this.REST_URL + id).toPromise().then(() => this.getAll());
  }

  //CREATE NEW RECORD
  addTask(selectedItem) {
    return this.proxy.post(this.REST_URL, selectedItem).toPromise().then(() => this.getAll());
  }

  //TO MODIFIY RECORD
  updateTask(selecteItem) {
    const id = selecteItem.id;
    //http://localhost:3000/tasklist/2
    return this.proxy.put(this.REST_URL + id, selecteItem).toPromise().then(() => this.getAll());
  }

}
