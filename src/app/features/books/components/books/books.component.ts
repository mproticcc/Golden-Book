import { Book } from './../../../models/book.model';
import { Subject, take, takeUntil } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from 'src/app/features/services/book.service';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  books?: Book[];

  searchedValue?: string;

  filteredValue?: string;

  private categorySubscription$: Subject<void> = new Subject<void>();

  constructor(
    private bookService: BookService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.getAllBooks();
    this.saveSearchedValue();
    this.saveFilteredValues();
  }

  ngOnDestroy(): void {
    this.categorySubscription$.next();
    this.categorySubscription$.complete();
  }

  deleteBook(book: Book): void {
    this.bookService
      .deleteB(book)
      .pipe(take(1))
      .subscribe(() => {
        this.getAllBooks();
      });
  }

  softDeleteBook(book: Book): void {
    this.bookService
      .softDelete(book)
      .pipe(take(1))
      .subscribe(() => {
        this.getAllBooks();
      });
  }

  private getAllBooks(): void {
    this.bookService
      .getAllWithNull()
      .pipe(take(1))
      .subscribe((books) => {
        this.books = books;
      });
  }

  private saveSearchedValue(): void {
    this.filterService.searchedValue$
      .pipe(takeUntil(this.categorySubscription$))
      .subscribe((value) => {
        this.searchedValue = value;
      });
  }

  private saveFilteredValues(): void {
    this.filterService.filteredCategoryValues$
      .pipe(takeUntil(this.categorySubscription$))
      .subscribe((value) => {
        this.filteredValue = value;
      });
  }
}
