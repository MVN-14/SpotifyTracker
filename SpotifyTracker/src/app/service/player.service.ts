import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RecentlyPlayedTracks } from '../models';
import { GenericRequestSerice } from './generic.request.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private sRequest: GenericRequestSerice) {}

  getRecentlyPlayedTracks(): Observable<RecentlyPlayedTracks> {
    return this.sRequest.get<RecentlyPlayedTracks>(
      `https://api.spotify.com/v1/me/player/recently-played?limit=50&before=${1682472517852}`
    );
  }

  // not working
  getNextRecentlyPlayedTracks(url: string): Observable<RecentlyPlayedTracks> {
    return this.sRequest.get<RecentlyPlayedTracks>(url);
  }
}
