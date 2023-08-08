import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'src/app/features/models/book.model';

@Pipe({
  name: 'authorFullName',
})
export class AuthorFullNamePipe implements PipeTransform {
  transform(book: Book): string {
    return `${book.authorName} ${book.authorSurname}`;
  }
}
