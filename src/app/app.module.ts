import {RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookpageComponent } from './bookpage/bookpage.component';
import {DatacomService} from './datacom.service';
import { CartComponent } from './cart/cart.component';
import { CartdetailsService} from './cartdetails.service';
const appRoutes:Routes=[
{path:'',component:BookpageComponent},
{path:'home',component:BookpageComponent},
{path:'cart',component:CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    BookpageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DatacomService,CartdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
