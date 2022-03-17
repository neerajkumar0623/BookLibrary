import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { BookCareComponent } from './book-care/book-care.component';
import { CareLoginComponent } from './care-login/care-login.component';
import { CareSignupComponent } from './care-signup/care-signup.component';
import { CareGuard } from './care.guard';
import { KeeperComponent } from './keeper/keeper.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ViewBookComponent } from './view-book/view-book.component';



const routes: Routes = [
  {
    path:'', redirectTo:'/login', pathMatch:'full' 
  },
  {
    path:'admin', component:AdminComponent, canActivate: [AdminGuard]
  },

  {
    path:'app', component:AppComponent
  },

  {
    path:'keeper', component:KeeperComponent, canActivate: [AuthGuard]
  },

  {
    path:'book-care', component:BookCareComponent,canActivate: [CareGuard]
  },

  {
    path:'login', component:LoginComponent
  },

  {
    path:'signup', component:SignupComponent
  },

  {
    path:'user-signup', component:UserSignupComponent
  },
  {
    path:'user-login', component:UserLoginComponent
  },
  {
    path:'care-login', component:CareLoginComponent
  },
  {
    path:'care-signup', component:CareSignupComponent
  },

  {
    path:'view-book/:id', component:ViewBookComponent
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
