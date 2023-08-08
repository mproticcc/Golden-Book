import { Subject, takeUntil, take } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { MatSidenav } from '@angular/material/sidenav';
import { CategoryService } from 'src/app/shared/services/category.service';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;

  categories?: string[];

  roleValue?: boolean;

  private categorySubscription$: Subject<void> = new Subject<void>();

  constructor(
    private categoryService: CategoryService,
    private sidebarService: SidebarService,
    private authorization: AuthorizationService
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.onToggle();
    this.isAdmin();
  }

  ngOnDestroy(): void {
    this.categorySubscription$.next();
    this.categorySubscription$.complete();
  }

  private onToggle(): void {
    this.sidebarService.toggleSidebar$
      .pipe(takeUntil(this.categorySubscription$))
      .subscribe(() => {
        this.sidenav.toggle();
      });
  }

  private getAllCategories(): void {
    this.categoryService
      .getAllCategories()
      .pipe(take(1))
      .subscribe((categories: string[]) => {
        this.categories = categories;
      });
  }

  private isAdmin(): boolean {
    return (this.roleValue = this.authorization.isAdmin());
  }
}
