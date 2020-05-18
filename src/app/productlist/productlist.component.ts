import { Component, OnInit, Inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
import { NgForm } from '@angular/forms';
import { ProductRestService } from '../product.rest.service'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist: any = [];

  PRODUCT_REST_URL = "http://localhost:3000/product/"

  //constructor(@Inject(HttpClient) private proxy: HttpClient) { }
  constructor(@Inject(ProductRestService) private proxy: ProductRestService) { }

  ngOnInit(): void {

    this.getDataFromDB();
    //this.saveData()
  }

  getDataFromDB() {
    this.proxy.getAllData().then(response => {
      console.log(response);
      this.productlist = response;
    }).catch(error => {
      console.log(error);
    })
  }

  deleteDataFromDB(id) {
    this.proxy.deleteById(id).then(response => {
      console.log(response);
      this.productlist = response;
      //this.getDataFromDB();
    }).catch(error => {
      console.log(error);
    })
  }

  getDataFromDBById(id) {
    this.proxy.getDataById(id).then(response => {
      console.log(response);

    }).catch(error => {
      console.log(error);
    })
  }

  saveData(frm: NgForm) {
    //const newProduct = { "productname": "Mobile", "price": 200 };
    const newProduct = frm.value;

    this.proxy.saveData(newProduct).then(respose => {
      console.log('Save Data succes');
      this.getDataFromDB();
      frm.resetForm();
    }).catch(error => {
      console.log('Save Data failed', error)
    })
  }

}
