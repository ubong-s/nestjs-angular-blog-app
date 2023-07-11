import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../authentication/authentication.service';
import { Observable, map, catchError, throwError } from 'rxjs';

export interface UserData {
  items: User[];
  meta: {
    itemCount: number;
    itemsPerPage: number;
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  findAll(page: number, size: number): Observable<UserData> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(size));

    return this.http.get('/api/users', { params }).pipe(
      map((userData: any) => userData),
      catchError((err) => throwError(() => err))
    );
  }

  paginateByName(
    page: number,
    size: number,
    username: string
  ): Observable<UserData> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(size));
    params = params.append('username', username);

    return this.http.get('/api/users', { params }).pipe(
      map((userData: any) => userData),
      catchError((err) => throwError(() => err))
    );
  }
}
