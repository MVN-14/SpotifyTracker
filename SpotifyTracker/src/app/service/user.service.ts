import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserProfile, TopItems, Artist, Track } from '../models';

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

  getTopArtists(): Observable<TopItems<Artist>> {
    return this.http.get<TopItems<Artist>>(
      `https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50&offset=0`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
        }
      });
  }

  getTopTracks(): Observable<TopItems<Track>> {
    return this.http.get<TopItems<Track>>(
      `https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50&offset=0`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
      }
    });
  }
}
