import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

interface LoginForm {
  email: string;
  password: string;
}

export interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  role?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(loginForm: LoginForm) {
    return this.http
      .post<any>('api/users/login', {
        email: loginForm.email,
        password: loginForm.password,
      })
      .pipe(
        map((token) => {
          localStorage.setItem('blog-token', token.accessToken);
          return token;
        })
      );
  }
  register(user: User) {
    return this.http
      .post<any>('api/users/', {
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
      })
      .pipe(map((user) => user));
  }
}
