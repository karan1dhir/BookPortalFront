import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import  'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import {Book} from './book';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { ErrorHandler } from '@angular/core';

@Injectable()
export class CartdetailsService {

  private ApiUrlGet="http://localhost:49316/api/Home/GetCartDetails";
  private ApiUrlDelete="http://localhost:49316/api/Home/DeletefromCart";
  private ApiUrlUpdate="http://localhost:49316/api/Home/UpdatetoCart";
  constructor(private http:HttpClient) {
    this.getBooks();
   }
  getBooks():Observable<Book[]>{
    return this.http.
    get(this.ApiUrlGet)
    .map((response: Book[]) => {
      // console.log(response);
        return response;
    });
  }
  removerFromDb(item:Book){
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.delete<Book>(this.ApiUrlDelete+"/"+item.id,httpOptions)
    .subscribe(
      data => {
        alert('removed from cart');
      },
      error => {
        console.log(JSON.stringify(error));
      }
    )}
    updateToDb(quant:string,item:Book){
      
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      };
      console.log(item.id);
      var obj={
       id:item.id,
       BookName:item.BookName,
       BookPrice:item.BookPrice,
       BookQuantityUser:parseInt(quant),
       BookUserId:1
      }   
      return this.http.put<Book>(this.ApiUrlUpdate+"/"+item.id,obj,httpOptions)
      .subscribe(
        data => {
          console.log('Value Updated');
        },
        error => {
          console.log(JSON.stringify(error));
        }
      )}
    }
  

