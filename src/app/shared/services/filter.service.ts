import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  searchedValue$: Subject<string> = new Subject<string>();

  filteredCategoryValues$: Subject<string> = new Subject<string>();

  constructor() {}
}
