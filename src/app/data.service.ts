import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, map } from 'rxjs';
import { Book } from './service/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL: string = "http://localhost:3000/books/";
  URL_: string = "http://localhost:3000/issuebook/";
  SURL: string = "http://localhost:3000/signupusers/";

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient) { }


  postBook(data: Book) {
  
    return this.http.post<any>(this.URL, data);
  }

  postissueBook(data: Book) {
  
    return this.http.post<any>(this.URL_ , data);
  }

  getBooks() {
    return this.http.get(this.URL);
  }

  getissueBook() {
    return this.http.get(this.URL_);
  }


  getStu() {
    return this.http.get(this.SURL);
  }


putBook(data:any, id:number){
  return this.http.put(this.URL + id , data);
}

putissueBook(data:any, id:number){
  return this.http.put(this.URL_ + id , data);
}

deleteBook(id:number){
  return this.http.delete(this.URL + id);

}

deleteissueBook(id:number){
  return this.http.delete(this.URL_ + id);

}

IsLoggedIn(){
  return !!localStorage.getItem('token');
}

IsAdminLoggedIn(){
  return !!localStorage.getItem('token');
}

IsCareLoggedIn(){
  return !!localStorage.getItem('token');
}

}
