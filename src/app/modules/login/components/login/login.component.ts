import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isTheManager: boolean;
  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.isTheManager = this.authService.isAuthorized();
  }

  public onChangeAnswer(change: MatRadioChange): void {
    this.authService.setAuthorized(change.value);
  }

}
