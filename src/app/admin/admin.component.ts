import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['bookname', 'bookprice', 'description', 'quantity', 'fine', 'action'];
  dataSource !: MatTableDataSource<Data>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  

  constructor(private dialog: MatDialog, private datas: DataService) {

  }


  ngOnInit(): void {
    this.getAllBook();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getAllBook();
      }
    })
  }
  getAllBook() {
    this.datas.getBooks()
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
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllBook();
      }
    })
  }

  deleteb(id: number) {
    this.datas.deleteBook(id)
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
