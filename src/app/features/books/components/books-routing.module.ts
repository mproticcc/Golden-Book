import { SingleBookComponent } from './single-book/single-book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmDeactivateGuard } from 'src/app/core/guards/confirm-deactivate-guard.guard';
import { BooksComponent } from './books/books.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { SaveFiltersGuard } from 'src/app/core/guards/save-filters.guard';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    canActivate: [AuthGuard],
    canDeactivate: [SaveFiltersGuard],
  },
  {
    path: ':bookId',
    component: SingleBookComponent,
    canDeactivate: [ConfirmDeactivateGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
