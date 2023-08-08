import { environment } from './../../../environments/environment';
import { Book } from './../models/book.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAllWithNull(): Observable<Book[]> {
    return this.http
      .get<Book[]>(`${environment.baseApiURL}books`)
      .pipe(map((books) => books.filter((book) => book.deletedAt === null)));
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.baseApiURL}books`);
  }

  getId(bookId: number): Observable<Book> {
    const header = new HttpHeaders().set('PageName', 'BookOverview');
    return this.http.get<Book>(`${environment.baseApiURL}books/${bookId}`, {
      headers: header,
    });
  }

  deleteB(book: Book): Observable<Object> {
    return this.http.delete(`${environment.baseApiURL}books/${book.id}`);
  }

  softDelete(book: Book): Observable<Object> {
    return this.http.patch(`${environment.baseApiURL}books/${book.id}`, {
      deletedAt: new Date().toISOString(),
    });
  }
}
