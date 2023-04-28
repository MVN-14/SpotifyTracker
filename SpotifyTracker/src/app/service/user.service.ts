import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {
  UserProfile,
  TopItems,
  Track,
  ArtistsPaged,
  TopArtist,
  Artist,
} from '../models';
import { GenericRequestSerice } from './generic.request.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private sRequest: GenericRequestSerice) {}

  public getCurrentUserProfile(): Observable<UserProfile> {
    return this.sRequest.get<UserProfile>('https://api.spotify.com/v1/me').pipe(
      map((userProfile) => {
        return { ...userProfile, photo_url: userProfile.images[0].url };
      })
    );
  }

  public getTopArtists(range: string): Observable<TopArtist[]> {
    return this.sRequest
      .get<TopItems<TopArtist>>(
        `https://api.spotify.com/v1/me/top/artists?time_range=${range}&limit=50&offset=0`
      )
      .pipe(
        map((topItem) =>
          topItem.items.map((artist) => TopArtist.fromJSON(artist))
        )
      );
  }

  public getTopTracks(range: string): Observable<Track[]> {
    return this.sRequest
      .get<TopItems<Track>>(
        `https://api.spotify.com/v1/me/top/tracks?time_range=${range}&limit=50&offset=0`
      )
      .pipe(
        map((topItems) => topItems.items.map((track) => Track.fromJSON(track)))
      );
  }

  public getFollowedArtists(): Observable<Artist[]> {
    return this.sRequest
      .get<{ artists: ArtistsPaged }>(
        'https://api.spotify.com/v1/me/following?type=artist'
      )
      .pipe(
        map((artistPaged) =>
          artistPaged.artists.items.map((artist) => Artist.fromJSON(artist))
        )
      );
  }
}
