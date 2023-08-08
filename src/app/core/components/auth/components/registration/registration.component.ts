import { User } from 'src/app/features/models/user.model';
import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/core/model/country.model';
import { CountryService } from 'src/app/core/services/country.service';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from 'src/app/shared/components/dialog-overview/dialog-overview.component';
import { Role } from 'src/app/core/model/role.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', '../login/login.component.scss'],
})
export class RegistrationComponent implements OnInit {
  countries: Country[];

  arePasswordsEqual?: boolean = false;

  private userID?: number;

  registrationForm = new FormGroup(
    {
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z][a-zA-Z]+$/),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z][a-zA-Z]+$/),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[^\s]+$/),
      ]),
      confirmPassword: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    },
    {
      validators: this.isPasswordMatched.bind(this),
    }
  );

  constructor(
    private country: CountryService,
    private authorization: AuthorizationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllCountries();
    this.getLastUserID();
  }

  getAllCountries(): void {
    this.country
      .getAllCountries()
      .pipe(take(1))
      .subscribe((countries) => (this.countries = countries));
  }

  onRegister(): void {
    const user: User = {
      id: this.userID,
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      country: +this.registrationForm.value.country,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      role: Role.User,
      currentCreation: new Date().toISOString(),
    };
    this.authorization
      .register(user)
      .pipe(take(1))
      .subscribe(() =>
        this.dialog.open(DialogOverviewComponent, {
          data: {
            title: 'You are successfully registered',
          },
          position: { top: '40px' },
          width: '35%',
        })
      );
  }

  private isPasswordMatched(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    if (password !== confirmPassword) {
      this.arePasswordsEqual = true;
    } else {
      this.arePasswordsEqual = false;
    }
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  private getLastUserID() {
    this.authorization
      .getAllUsers()
      .pipe(take(1))
      .subscribe((users: User[]) => {
        this.userID = users[users.length - 1].id + 1;
      });
  }
}
