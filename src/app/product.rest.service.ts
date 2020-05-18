import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'


//ng g service product.reset
//ng g s product.reset

//ng g class className` `

@Injectable({
  providedIn: 'root'
})
export class ProductRestService {

  PRODUCT_REST_URL = "http://localhost:3000/product/"

  constructor(@Inject(HttpClient) private proxy: HttpClient) { }

  getAllData() {
    return this.proxy.get(this.PRODUCT_REST_URL).toPromise()
  }

  getDataById(id) {
    return this.proxy.get(this.PRODUCT_REST_URL + id).toPromise();
  }

  saveData(newProduct) {
    return this.proxy.post(this.PRODUCT_REST_URL, newProduct).toPromise()
  }

  deleteById(id) {
    return this.proxy.delete(this.PRODUCT_REST_URL + id).toPromise().then(response => {
      return this.getAllData();
    })
  }
}
