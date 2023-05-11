import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericRequestSerice {
  constructor(private http: HttpClient) {}

  public get<T>(url: string): Observable<T> {
    return this.http
      .get<T>(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
        },
      })
      .pipe(
        catchError(() => {
          sessionStorage.setItem('access_token', '');
          sessionStorage.setItem('refresh_token', '');
          return of();
        })
      );
  }
}
