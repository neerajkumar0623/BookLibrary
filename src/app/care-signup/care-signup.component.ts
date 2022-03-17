import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-care-signup',
  templateUrl: './care-signup.component.html',
  styleUrls: ['./care-signup.component.css']
})
export class CareSignupComponent implements OnInit {

  fname!: "^[ a-zA-Z][a-zA-Z ]*$";
  public signupForm!: FormGroup;

  hide=true;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      fullname: ['', Validators.required, Validators.pattern(this.fname)],
      email: ['', Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      mobile: ['', Validators.required, Validators.maxLength(10), Validators.minLength(10)],
      password: ['', Validators.required]
    });
  }

  signUp() {
    this.http.post<any>("http://localhost:3000/signupcare", this.signupForm.value)
      .subscribe(res => {
        alert('Signup Successfully');
        this.signupForm.reset();
        this.router.navigate(['care-login']);
      }, err => {
        alert('error')
      })
  }

  get fullname() {
    return this.signupForm.get('fullname');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get mobile() {
    return this.signupForm.get('mobile');
  }

  get password() {
    return this.signupForm.get('password');
  }
}
