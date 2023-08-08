import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  defaultValue?: string = '';

  constructor(private filterService: FilterService) {
    this.showSearchedValue();
  }

  onKeyPress(searchedValue: string): void {
    this.filterService.searchedValue$.next(searchedValue);
    this.defaultValue = searchedValue;
  }

  onClick(val: string): void {
    alert(`Searched value: ${val}`);
  }

  private showSearchedValue(): void {
    const filter: string | null = localStorage.getItem('filter');
    if (filter) {
      const storageValue = JSON.parse(filter);
      if (storageValue.searchValue) {
        this.defaultValue = storageValue.searchValue;
      } else {
        this.defaultValue = '';
      }
    }
  }
}
