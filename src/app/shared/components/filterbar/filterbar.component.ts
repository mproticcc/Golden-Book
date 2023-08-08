import { take } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { FilterService } from '../../services/filter.service';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss'],
})
export class FilterbarComponent implements OnInit {
  categories?: string[];

  category = '';

  @ViewChild('filterCategories') filterCategories: MatSelect;

  constructor(
    private categoryService: CategoryService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.showFilteredValue();
  }

  saveFilters(category: string): void {
    this.filterService.filteredCategoryValues$.next(category);
  }

  private getCategories(): void {
    this.categoryService
      .getAllCategories()
      .pipe(take(1))
      .subscribe((categories: string[]) => {
        this.categories = categories;
      });
  }

  private showFilteredValue(): void {
    const filter: string | null = localStorage.getItem('filter');
    if (filter) {
      const storageFilter = JSON.parse(filter);
      this.category = storageFilter.categoryValue;
    }
  }
}
