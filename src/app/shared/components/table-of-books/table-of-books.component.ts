import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Book } from 'src/app/features/models/book.model';
import { BookService } from 'src/app/features/services/book.service';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-table-of-books',
  templateUrl: './table-of-books.component.html',
  styleUrls: ['./table-of-books.component.scss'],
})
export class TableOfBooksComponent implements OnInit {
  displayedColumns: string[] = [
    'dots',
    'image',
    'name',
    'author',
    'year',
    'category',
    'description',
    'ISBN',
    'review',
    'goBook',
  ];

  dataSource?: Book[];

  constructor(private bookService: BookService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  openDialog(bookId: number): void {
    let dialogRef = this.dialog.open(DialogOverviewComponent, {
      data: {
        description: this.dataSource[bookId - 1].description,
        title: 'Book Description',
      },
      position: { top: '40px' },
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log(`Dialog closed`);
    });
  }

  private getAllBooks(): void {
    this.bookService
      .getAll()
      .pipe(take(1))
      .subscribe((books) => {
        this.dataSource = books;
      });
  }
}
