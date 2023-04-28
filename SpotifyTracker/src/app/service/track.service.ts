import { Injectable } from '@angular/core';
import { Recommendation, Track } from '../models';
import { Observable, map } from 'rxjs';
import { GenericRequestSerice } from './generic.request.service';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  constructor(private sRequest: GenericRequestSerice) {}

  getTrackById(id: string): Observable<Track> {
    return this.sRequest.get<Track>(`https://api.spotify.com/v1/tracks/${id}`);
  }

  getTrackRecommendations(
    market: string,
    seedTracks: string,
    seedArtists: string = '',
    seedGenres: string = ''
  ): Observable<Track[]> {
    return this.sRequest
      .get<Recommendation>(
        `https://api.spotify.com/v1/recommendations?limit=100&market=${market}&seed_artists=${seedArtists}&seed_genres=${seedGenres}&seed_tracks=${seedTracks}`
      )
      .pipe(
        map((recommendation) =>
          recommendation.tracks.map((track) => Track.fromJSON(track))
        )
      );
  }
}
