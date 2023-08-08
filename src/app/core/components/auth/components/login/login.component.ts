import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { RegisterUser } from 'src/app/features/models/register-user.model';
import { User } from 'src/app/features/models/user.model';
import { DialogOverviewComponent } from 'src/app/shared/components/dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthorizationService,
    private route: Router,
    private modal: MatDialog
  ) {}

  ngOnInit(): void {}

  loginUser(): void {
    const user: RegisterUser = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.authService
      .login(user)
      .pipe(take(1))
      .subscribe((value: User[]) => {
        if (value.length) {
          localStorage.setItem('role', value[0].role);
          localStorage.setItem(
            'User',
            JSON.stringify({
              firstName: value[0].firstName,
              lastName: value[0].lastName,
              email: value[0].email,
            })
          );
          this.route.navigateByUrl('');
        } else {
          this.modal.open(DialogOverviewComponent, {
            data: {
              title: 'You are not registered',
            },
            position: { top: '40px' },
            width: '40%',
          });
        }
      });
  }
}
