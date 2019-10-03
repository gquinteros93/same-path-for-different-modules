import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    RouterModule.forChild([{path: '', component: LoginComponent}])
  ]
})
export class LoginModule { }
