import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/app/features/models/register-user.model';
import { User } from 'src/app/features/models/user.model';

import { environment } from 'src/environments/environment';
import { Role } from '../model/role.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private http: HttpClient) {}

  login(user: RegisterUser): Observable<RegisterUser[]> {
    return this.http.get<RegisterUser[]>(
      `${environment.baseApiURL}users?email=${user.email}&password=${user.password}`
    );
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${environment.baseApiURL}users`, user);
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === Role.Admin;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseApiURL}users`);
  }
}
