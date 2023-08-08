import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { MaterialSidebarModule } from './material/material-sidebar.module';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterbarComponent } from './components/filterbar/filterbar.component';
import { PageNumberComponent } from './components/page-number/page-number.component';
import { TableOfBooksComponent } from './components/table-of-books/table-of-books.component';
import { MatTableModule } from '@angular/material/table';
import { DialogOverviewComponent } from './components/dialog-overview/dialog-overview.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchBorderDirective } from './directives/search-border.directive';

const COMPONENTS = [
  FilterbarComponent,
  PageNumberComponent,
  SearchComponent,
  NotFoundComponent,
  TableOfBooksComponent,
  DialogOverviewComponent,
];

@NgModule({
  declarations: [...COMPONENTS, SearchBorderDirective],
  imports: [
    CommonModule,
    MaterialModule,
    MaterialSidebarModule,
    RouterModule,
    MatTableModule,
    MatDialogModule,
  ],
  exports: [...COMPONENTS],
})
export class SharedModule {}
