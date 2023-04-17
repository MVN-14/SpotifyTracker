import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getLoginUrl(): Observable<{data: string}> {
    return this.http.get<{data: string}>("http://localhost:8008/login/url");
  }

  refreshAccessToken(): Observable<{access_token: string, refresh_token: string}> {
    return this.http.get<{ access_token: string, refresh_token: string }>(`http://localhost:8008/login/url/refresh/${sessionStorage.getItem("refresh_token")}`)
  }
}
