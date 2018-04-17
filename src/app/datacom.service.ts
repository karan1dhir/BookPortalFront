import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';
import  'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import {Product} from "../app/product";
import { RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { ErrorHandler } from '@angular/core';


@Injectable()
export class DatacomService {

  private ApiUrlGet="http://localhost:49316/api/Home/GetBooks";
  private ApiUrlPost="http://localhost:49316/api/Home/AddDetails";
  constructor(private http: HttpClient) {
        this.getPosts();
   }
   getPosts(): Observable<Product[]>{
    return this.http
        .get(this.ApiUrlGet)
        .map((response: Product[]) => {
          // console.log(response);
            return response;
        });
  }
  getItemsClick(data:Product){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    var obj={
      id:data.id,
      BookName:data.BookName,
      BookPrice:data.BookPrice,
      BookQuantityUser:1,
      BookUserId:1
    }
    return this.http.post<Product>(this.ApiUrlPost, obj, httpOptions)
    .subscribe(
      data => {
        alert('added to cart');
      },
      error => {
        console.log(JSON.stringify(error));
      }
    )}
};
