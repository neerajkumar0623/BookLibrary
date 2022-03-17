import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';
import { DataService } from '../data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Book } from '../service/book';

@Component({
  selector: 'app-care-dialog',
  templateUrl: './care-dialog.component.html',
  styleUrls: ['./care-dialog.component.css']
})
export class CareDialogComponent implements OnInit {

  BookForm !: FormGroup;
actionbtn:string ="save";
Books:Book[]=[] ;
  Students: Book[]=[];

  constructor(private formbuilder : FormBuilder, 
    private datas: DataService, private router:Router , @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef:MatDialogRef<CareDialogComponent>) { }

  ngOnInit(): void {
    this.getAllBook()
    this.getAllStu()

    this.BookForm = this.formbuilder.group({
      fullname : ['', Validators.required],
      serial: ['', Validators.required],
      booklist : ['', Validators.required],
      email : ['', Validators.required],
      issuedate :['', Validators.required],
      expiredate :['', Validators.required],
      id : ['', Validators.required]
    })

    if(this.editData){
      this.actionbtn='update'
      this.BookForm.controls['fullname'].setValue(this.editData.fullname);
      this.BookForm.controls['serial'].setValue(this.editData.serial);
      this.BookForm.controls['booklist'].setValue(this.editData.booklist);
      this.BookForm.controls['email'].setValue(this.editData.email);
      this.BookForm.controls['issuedate'].setValue(this.editData.issuedate);
      this.BookForm.controls['expiredate'].setValue(this.editData.expiredate);
      this.BookForm.controls['id'].setValue(this.editData.id);
    }
  }

  issueBook() {

    if(!this.editData){
      if(this.BookForm.valid){
        this.datas.postissueBook(this.BookForm.value)
        .subscribe({
          next:(res)=>{
            alert('Book Issue Successfully')
            this.BookForm.reset();
            this.dialogRef.close('save');
          }, error:()=>{
            alert('error');
          }
        })
      }
     }else{
       this.updateBook()
     }
  }
    
//  if(!this.editData){
//   if(this.BookForm.valid){
//     this.datas.postBook(this.BookForm.value)
//     .subscribe({
//       next:(res)=>{
//         alert('Book Added Successfully')
//         this.BookForm.reset();
//         this.dialogRef.close('save');
//       }, error:()=>{
//         alert('error');
//       }
//     })
//   }
//  }else{
//    this.updateBook()
//  }
//   }


updateBook(){
  
  this.datas.putissueBook(this.BookForm.value, this.editData.id)
  .subscribe({
    next:(res)=>{
      alert('book updated successfully');
      this.BookForm.reset();
      this.dialogRef.close('update');

    },
    error:()=>{
      alert('error')
    }
  })
}




getAllBook() {
  this.datas.getBooks()
    .subscribe({
      next: (res: any) => {
        this.Books= res
      }, error: (err) => {
        alert('error')
      }
    })
}

getAllStu() {
  this.datas.getStu()
    .subscribe({
      next: (res: any) => {
        this.Students= res
      }, error: (err) => {
        alert('error')
      }
    })
}

}
