import { Component, OnInit } from '@angular/core';
import {CartdetailsService} from '../cartdetails.service';
import {Book} from '../book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[CartdetailsService]
})
export class CartComponent implements OnInit {
  CheckVisible: boolean = false;
  data:Book[];
  msg:string;
  item:Book;
  price:number;

  quantity = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'}
  ];
  constructor(private service :CartdetailsService) {
   }
   getData():void{
    this.service.getBooks().subscribe(result=>{
      this.data = result;
      // console.log(this.data);
    })
   } 
   removeItem(item:Book):void{
     console.log(item);
     this.item=item;
     this.CheckVisible=true;
     this.service.removerFromDb(item);
     this.service.getBooks();
   }
   selectedOn(quant:string,item:Book):void{
    //  console.log(quant);
     this.service.updateToDb(quant,item);
   }
  ngOnInit() {
    this.getData();
  }
}
