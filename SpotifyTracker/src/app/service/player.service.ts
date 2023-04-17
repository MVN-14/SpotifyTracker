import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RecentlyPlayedTracks } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PlayerService  {

  constructor(private http: HttpClient) { }

  getRecentlyPlayedTracks(): Observable<RecentlyPlayedTracks> {
    return this.http.get<RecentlyPlayedTracks>("https://api.spotify.com/v1/me/player/recently-played?limit=50", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
      }
    });
  }
}
