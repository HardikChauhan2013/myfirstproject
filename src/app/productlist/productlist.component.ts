import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist: any = [];

  constructor(@Inject(HttpClient) private proxy: HttpClient) { }

  ngOnInit(): void {
    this.proxy.get("http://localhost:3000/product").toPromise().then(response => {
      console.log(response);
      this.productlist = response;
    }).catch(error => {
      console.log(error);
    })

    //this.saveData()
  }

  saveData() {
    const newProduct = { "productname": "Mobile", "price": 200 };
    this.proxy.post("http://localhost:3000/product", newProduct).toPromise().then(respose => {
      console.log('Save Data succes')
    }).catch(error => {
      console.log('Save Data failed', error)
    })
  }

}
