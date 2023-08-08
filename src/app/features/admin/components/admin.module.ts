import { AdminRoutingModule } from './admin-routing.module';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminBooksComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  exports: [AdminBooksComponent],
})
export class AdminModule {}
