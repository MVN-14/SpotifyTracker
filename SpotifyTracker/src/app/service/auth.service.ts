import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RefreshTokenResponse } from '../models';
import { QueryParams } from '../models/QueryParams';
import { GenericRequestSerice } from './generic.request.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private sRequest: GenericRequestSerice) {}
  public getLoginUrl(): string {
    const params: QueryParams = new QueryParams()
      .add('client_id', environment.clientID)
      .add('response_type', 'code')
      .add('redirect_uri', environment.redirectUri)
      .add(
        'scope',
        'user-follow-read user-read-private user-read-email user-top-read user-read-recently-played user-read-playback-position app-remote-control streaming user-modify-playback-state user-read-playback-state user-read-currently-playing'
      );

    return `https://accounts.spotify.com/authorize${params.toString()}`;
  }
}
