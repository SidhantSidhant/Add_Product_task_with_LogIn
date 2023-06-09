import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProductsData(): Observable<any> {
    return this._http.get<any>(`http://localhost:3000/posts`);
  }

  addProductsApiCall(body: any) {
    const headersReq = new HttpHeaders({
      "content-type" : "application/json"
    })
    return this._http.post(`http://localhost:3000/posts`, body ,{headers : headersReq})
  }
}
