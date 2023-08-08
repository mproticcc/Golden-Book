import { Observable, map, shareReplay } from 'rxjs';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/features/models/category.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories$: Observable<Category[]>;

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<string[]> {
    if (!this.categories$) {
      this.categories$ = this.http
        .get<Category[]>(`${environment.baseApiURL}categories`)
        .pipe(shareReplay());
    }
    return this.categories$.pipe(
      map((categories: Category[]) =>
        categories.map((category: Category) => category.name)
      )
    );
  }
}
