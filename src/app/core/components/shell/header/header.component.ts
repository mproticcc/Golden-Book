import { SidebarService } from './../../../services/sidebar.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private sidebarService: SidebarService, private route: Router) {}

  onToggle(): void {
    this.sidebarService.toggle();
  }

  logOut(): void {
    localStorage.removeItem('User');
    localStorage.removeItem('filter');
    localStorage.removeItem('role');
    this.route.navigateByUrl('/login');
  }
}
