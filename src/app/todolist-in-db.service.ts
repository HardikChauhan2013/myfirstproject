import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodolistInDBService {

  REST_URL = 'http://localhost:3000/tasklist/'

  constructor(@Inject(HttpClient) private proxy: HttpClient) { }

  tasklist: any = []

  getAll() {
    return this.proxy.get(this.REST_URL).toPromise().then(response => {
      this.tasklist = response;
    })
  }

  //GET BY ID 
  findTask(selecteItem) {
    const id = selecteItem.id;
    //http://localhost:3000/tasklist/2
    return this.proxy.get(this.REST_URL + id).toPromise();
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
    return this.proxy.post(this.REST_URL, selectedItem).toPromise();
  }

  //TO MODIFIY RECORD
  updateTask(selecteItem) {
    const id = selecteItem.id;
    //http://localhost:3000/tasklist/2
    return this.proxy.put(this.REST_URL + id, selecteItem).toPromise();
  }

}
