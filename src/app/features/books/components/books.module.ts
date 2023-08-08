import { HighlighterDirective } from './../../directives/highlighter/highlighter.directive';
import { BooksRoutingModule } from './books-routing.module';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SingleBookComponent } from './single-book/single-book.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthorFullNamePipe } from 'src/app/shared/pipes/author-full-name.pipe';
import { DescriptionLimitPipe } from 'src/app/shared/pipes/description-limit.pipe';

const COMPONENTS = [BookComponent, BooksComponent, SingleBookComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    HighlighterDirective,
    AuthorFullNamePipe,
    DescriptionLimitPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatCardModule,
    BooksRoutingModule,
    MatDialogModule,
  ],
  exports: [...COMPONENTS],
})
export class BooksModule {}
