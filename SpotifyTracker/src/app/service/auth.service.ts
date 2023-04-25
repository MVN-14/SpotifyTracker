import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RefreshTokenResponse } from '../models';
import { HttpClient } from '@angular/common/http';
import { QueryParams } from '../models/QueryParams';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private static readonly SCOPE =
    'user-follow-read user-read-private user-read-email user-top-read user-read-recently-played user-read-playback-position app-remote-control streaming user-modify-playback-state user-read-playback-state user-read-currently-playing';
  private static readonly CLIENT_ID: string =
    '902290fda70b44e38075ac4968459dd7';
  private static readonly REDIRECT_URI: string =
    'http://localhost:8008/login/callback';

  getLoginUrl(): string {
    const params: QueryParams = new QueryParams()
      .add('client_id', AuthService.CLIENT_ID)
      .add('response_type', 'code')
      .add('redirect_uri', AuthService.REDIRECT_URI)
      .add('scope', AuthService.SCOPE);

    return `https://accounts.spotify.com/authorize${params.toString()}`;
  }

  refreshAccessToken(): Observable<RefreshTokenResponse> {
    return this.http.get<RefreshTokenResponse>(
      `http://localhost:8008/login/refresh/${sessionStorage.getItem(
        'refresh_token'
      )}`
    );
  }
}
