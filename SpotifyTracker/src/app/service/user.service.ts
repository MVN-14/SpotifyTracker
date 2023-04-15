import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserProfile } from '../models/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getCurrentUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
      }
    });
  }

  // getTopArtists(): Observable<Artist> {

  // }
}
