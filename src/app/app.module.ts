import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon' ;
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BookCareComponent } from './book-care/book-care.component';
import { KeeperComponent } from './keeper/keeper.component';
import {MatCardModule} from '@angular/material/card';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { CareSignupComponent } from './care-signup/care-signup.component';
import { CareLoginComponent } from './care-login/care-login.component';
import { CareDialogComponent } from './care-dialog/care-dialog.component';
import { ViewBookComponent } from './view-book/view-book.component';
import {MatSelectModule} from '@angular/material/select';
import { AuthGuard } from './auth.guard';
import { CareGuard } from './care.guard';
import { AdminGuard } from './admin.guard';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    BookCareComponent,
    KeeperComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    UserLoginComponent,
    UserSignupComponent,
    CareSignupComponent,
    CareLoginComponent,
    CareDialogComponent,
    ViewBookComponent,
    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule ,
    FormsModule,
    RouterModule,
    CommonModule ,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule,
    
  ],
  providers: [DataService, AuthGuard, CareGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
