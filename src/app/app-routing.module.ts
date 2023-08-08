import { LoginComponent } from './core/components/auth/components/login/login.component';
import { RegistrationComponent } from './core/components/auth/components/registration/registration.component';
import { ShellLayoutComponent } from './core/components/shell/layouts/shell-layout/shell-layout.component';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ShellLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full',
      },
      {
        path: 'books',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./features/books/components/books.module').then(
            (module) => module.BooksModule
          ),
      },
      {
        path: 'admin',
        canLoad: [AuthGuard],
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./features/admin/components/admin.module').then(
            (module) => module.AdminModule
          ),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
