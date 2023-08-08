import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { MaterialSidebarModule } from '../shared/material/material-sidebar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from './components/auth/components/login/login.component';
import { RegistrationComponent } from './components/auth/components/registration/registration.component';
import { FooterComponent } from './components/shell/footer/footer.component';
import { HeaderComponent } from './components/shell/header/header.component';
import { SidebarComponent } from './components/shell/sidebar/sidebar.component';
import { ShellLayoutComponent } from './components/shell/layouts/shell-layout/shell-layout.component';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
  LoginComponent,
  RegistrationComponent,
  ShellLayoutComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MaterialModule,
    MaterialSidebarModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  exports: [...COMPONENTS],
})
export class CoreModule {}
