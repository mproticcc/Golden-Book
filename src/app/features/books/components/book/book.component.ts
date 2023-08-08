import { Book } from './../../../models/book.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book!: Book;

  @Output() delete = new EventEmitter<void>();

  @Output() softDelete = new EventEmitter<void>();

  onDelete(): void {
    this.delete.emit();
  }
  onSoftDelete(): void {
    this.softDelete.emit();
  }
}
