import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../service/products.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {

  unsubscribe$: Subject<void> = new Subject();
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
    this._productsservice.addProductsApiCall(obj).pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
    })
    this.productForm.reset();
    this._router.navigate(["/products"])
  }

  ngOnDestroy(): void {
    setTimeout(()=>{
      this.unsubscribe$.next();
      this.unsubscribe$.complete()
    },100)
  }
}
