import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { AuthService } from '../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: any[] = [];
  cardLength !: number;
  constructor(private _productsservice: ProductsService,
      private _authservice : AuthService,
      private _router : Router
    ) { }

  ngOnInit(): void {
    this._productsservice.getProductsData().subscribe((data: any) => {
      this.product = data;
    })
  }

  isUserLogOut(){
    this._authservice.isUserLogOut();
    
  }
}
