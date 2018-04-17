import { Component, OnInit,Input } from '@angular/core';
import { DepartmentComponent } from '../department/department.component';
import {DatacomService} from '../datacom.service'
import { Product } from '../product';


@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css'],
  providers:[DatacomService]
})


export class BookpageComponent implements OnInit {

  item:Product;
  data:Product[];
  msg:String ="";
  nCount: number = 0;
  isValid : { [s: number]: boolean; } = {};
  //isValid:boolean=false;
  constructor(private service :DatacomService) {
   }
   getData():void{
     this.service.getPosts().subscribe(result=>{
       this.data = result;
  });
     console.log(this.data);
  } 
  ngOnInit() {
         this.getData();
  }   
        
 clickMe(item:Product) {
    this.nCount = this.nCount + 1;
    this.msg = ""+ this.nCount;
    this.item=item;
    this.service.getItemsClick(this.item);
    this.isValid[item.id] = true;
  
  }
 isValidForm(id:any) {
   if(this.isValid[id] != null){
     return true;
   }
   else{
     return this.isValid[id];
   }
 } 
}
