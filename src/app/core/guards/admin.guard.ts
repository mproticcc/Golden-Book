import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private route: Router,
    private authorization: AuthorizationService
  ) {}

  canActivate(): boolean {
    if (this.authorization.isAdmin()) {
      return true;
    }
    this.route.navigateByUrl('/books');
    return false;
  }
}
