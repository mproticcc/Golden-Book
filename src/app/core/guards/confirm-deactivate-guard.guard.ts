import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SingleBookComponent } from 'src/app/features/books/components/single-book/single-book.component';
import { DialogOverviewComponent } from 'src/app/shared/components/dialog-overview/dialog-overview.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDeactivateGuard
  implements CanDeactivate<SingleBookComponent>
{
  leaveValue?: boolean;

  constructor(private dialog: MatDialog) {}

  canDeactivate(): boolean | Observable<boolean> {
    const modal = this.dialog.open(DialogOverviewComponent, {
      data: {
        description: '',
        title: 'Are you sure that you want to leave page?',
      },
      position: { top: '40px' },
      width: '40%',
    });

    return modal.afterClosed();
  }
}
