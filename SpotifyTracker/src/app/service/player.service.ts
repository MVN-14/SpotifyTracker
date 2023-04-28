import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PlayHistory, RecentlyPlayedTracks, Track } from '../models';
import { GenericRequestSerice } from './generic.request.service';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private sRequest: GenericRequestSerice) {}

  getRecentlyPlayedTracks(): Observable<PlayHistory[]> {
    return this.sRequest
      .get<RecentlyPlayedTracks>(
        `https://api.spotify.com/v1/me/player/recently-played?limit=50`
      )
      .pipe(
        map((recentlyPlayedTracks) => {
          return recentlyPlayedTracks.items.map((playHistory) =>
            PlayHistory.FromJSON(playHistory)
          );
        })
      );
  }
}
