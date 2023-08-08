import { take } from 'rxjs';
import { Book } from './../../../models/book.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/features/services/book.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss'],
})
export class SingleBookComponent implements OnInit {
  book?: Book;

  idBook!: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.idBook = Number(this.activeRoute.snapshot.paramMap.get('bookId'));
    this.getSingleBook(this.idBook);
  }

  private getSingleBook(bookID: number): void {
    this.bookService
      .getId(bookID)
      .pipe(take(1))
      .subscribe((book) => {
        this.book = book;
      });
  }
}
