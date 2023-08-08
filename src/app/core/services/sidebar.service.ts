import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  toggleSidebar$: Subject<boolean> = new Subject();

  constructor() {}

  toggle() {
    return this.toggleSidebar$.next(true);
  }
}
