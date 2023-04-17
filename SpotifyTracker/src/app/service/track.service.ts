import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recommendation, Track } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http: HttpClient) { }

  getTrackById(id: string) {
    return this.http.get(`https://api.spotify.com/v1/tracks/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
      }
    });
  }

  getTrackRecommendations(seedArtists: string, seedGenres: string, seedTracks: string, market: string) : Observable<Recommendation> {
    return this.http.get<Recommendation>(`https://api.spotify.com/v1/recommendations?limit=100&market=${market}&seed_artists=${seedArtists}&seed_genres=${seedGenres}&seed_tracks=${seedTracks}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
      }
    });
  }
}
