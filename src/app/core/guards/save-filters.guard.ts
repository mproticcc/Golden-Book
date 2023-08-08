import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksComponent } from 'src/app/features/books/components/books/books.component';
import { DialogOverviewComponent } from 'src/app/shared/components/dialog-overview/dialog-overview.component';

@Injectable({
  providedIn: 'root',
})
export class SaveFiltersGuard implements CanDeactivate<BooksComponent> {
  constructor(private dialog: MatDialog) {}

  canDeactivate(component: BooksComponent): Observable<boolean> | boolean {
    const modal = this.dialog.open(DialogOverviewComponent, {
      data: {
        description: 'Do you want to save filters?',
        title: 'Save filters',
        searchValue: component.searchedValue,
        filteredValue: component.filteredValue,
      },
      position: { top: '40px' },
      width: '40%',
    });

    return modal.afterClosed();
  }
}
