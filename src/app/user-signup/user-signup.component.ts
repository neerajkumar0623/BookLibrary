import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  public signupForm!:FormGroup;

  hide=true;

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:['', Validators.required],
      email:['', Validators.required,],
      mobile:['', Validators.required, ],
      serial:['', Validators.required, ],
      password:['', Validators.required,]
    });
  }

  signUp(){
this.http.post<any>("http://localhost:3000/signupusers", this.signupForm.value)
.subscribe(res=>{
  alert('Signup Successfully');
  this.signupForm.reset();
  this.router.navigate(['user-login']);
 
},err=>{
  alert('error')
})
  }

  get fullname(){
    return this.signupForm.get('fullname');
  }

  get email(){
    return this.signupForm.get('email');
  }

  get mobile(){
    return this.signupForm.get('mobile');
  }

  get password(){
    return this.signupForm.get('password');
  }

  get serial(){
    return this.signupForm.get('serial');
  }
}
