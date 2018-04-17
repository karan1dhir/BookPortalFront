import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {BookpageComponent} from '../bookpage/bookpage.component';
import {Product} from "../product";
import { DatacomService } from '../datacom.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],

})
export class DepartmentComponent implements OnInit {
 
  item:Product;
  constructor(private service :DatacomService) {
  }
  
  ngOnInit() {
  }
} 
