import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss'],
})
export class DialogOverviewComponent {
  description: string = this.data.description;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      description: string;
      title: string;
      searchValue: string;
      filteredValue: string;
    },
    private dialogRef: MatDialogRef<DialogOverviewComponent>
  ) {}

  saveInStorage(): void {
    const filter = {
      searchValue: this.data.searchValue,
      categoryValue: this.data.filteredValue,
    };

    const filters: string = JSON.stringify(filter);
    localStorage.setItem('filter', filters);

    this.leavePage();
  }

  leavePage(): void {
    this.dialogRef.close(true);
  }

  stayOnPage(): void {
    this.dialogRef.close(false);
  }
}
