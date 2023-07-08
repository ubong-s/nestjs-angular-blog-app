import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthenticationService) {}

  login() {
    this.authService
      .login('ubong@gmail.com', 'secret')
      .subscribe((data) => console.log('Success'));
  }
}
