import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

BookForm !: FormGroup;
actionbtn:string ="save"

  constructor(private formbuilder : FormBuilder, 
    private datas: DataService, @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.BookForm = this.formbuilder.group({
      bookname : ['', Validators.required],
      bookprice : ['', Validators.required],
      description : ['', Validators.required],
      quantity :['', Validators.required],
      fine : ['', Validators.required]
    })

    if(this.editData){
      this.actionbtn='update'
      this.BookForm.controls['bookname'].setValue(this.editData.bookname);
      this.BookForm.controls['bookprice'].setValue(this.editData.bookprice);
      this.BookForm.controls['description'].setValue(this.editData.description);
      this.BookForm.controls['quantity'].setValue(this.editData.quantity);
      this.BookForm.controls['fine'].setValue(this.editData.fine)
    }
  }

  addBook(){
    
 if(!this.editData){
  if(this.BookForm.valid){
    this.datas.postBook(this.BookForm.value)
    .subscribe({
      next:(res)=>{
        alert('Book Added Successfully')
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

  updateBook(){
    this.datas.putBook(this.BookForm.value, this.editData.id)
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
}
