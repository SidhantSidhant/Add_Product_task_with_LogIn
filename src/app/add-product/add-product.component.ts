import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm !: FormGroup;

  constructor(private _productsservice: ProductsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null),
      content: new FormControl(null)
    })
  }

  createProductForm(): void {
    let obj = this.productForm.value;
    this._productsservice.addProductsApiCall(obj).subscribe((data) => {
    })
    this.productForm.reset();
    this._router.navigate(["/products"])
  }
}
