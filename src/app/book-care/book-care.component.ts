import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';

import { CareDialogComponent } from '../care-dialog/care-dialog.component';

@Component({
  selector: 'app-book-care',
  templateUrl: './book-care.component.html',
  styleUrls: ['./book-care.component.css']
})
export class BookCareComponent implements OnInit {

  displayedColumns: string[] = ['fullname', 'bookname', 'serial', 'email', 'issuedate', 'expiredate',  'action'];
  dataSource !: MatTableDataSource<Data>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  constructor( private dialog: MatDialog , private datas:DataService) { }

  ngOnInit(): void {
    this.getAllBook();
  }


  openDialog() {
    this.dialog.open(CareDialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getAllBook();
      }
    })
  }


  getAllBook() {
    this.datas.getissueBook()
      .subscribe({
        next: (res: any) => {

          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        }, error: (err) => {
          alert('error')
        }
      })
  }

  editBook(row: any) {
    this.dialog.open(CareDialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllBook();
      }
    })
  }

  deleteb(id: number) {
    this.datas.deleteissueBook(id)
      .subscribe({
        next: (res) => {
          alert('Book deleted!')
        },
        error: () => {
          alert('error')
        }
      })
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
}
