import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-number',
  templateUrl: './page-number.component.html',
  styleUrls: ['./page-number.component.scss'],
})
export class PageNumberComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Rows per page:';
  }
}
