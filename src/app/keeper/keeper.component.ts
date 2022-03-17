import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../service/book' 
@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css']
})
export class KeeperComponent implements OnInit {
  issuebook!: string;

  constructor( private datas:DataService) { }

  Books:Book[]=[];
  noData=true;

  
  user:any;


  ngOnInit(): void {
    this.datas.getissueBook().subscribe(
      (Response:any)=>{
        this.Books = Response.filter( (Book: { serial: number; }) => Book.serial ==101);
        console.log(this.Books[0].booklist)

    
        
      },
      (error:any)=>console.log(error)
    )}



  }




function id(id: any) {
  throw new Error('Function not implemented.');
}

