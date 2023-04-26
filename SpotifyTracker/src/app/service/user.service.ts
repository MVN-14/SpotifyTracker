import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserProfile, TopItems, Artist, Track, ArtistsPaged } from '../models';
import { GenericRequestSerice } from './generic.request.service';
import { map, shareReplay } from 'rxjs';

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

  public getTopArtists(): Observable<TopItems<Artist>> {
    return this.sRequest.get<TopItems<Artist>>(
      'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50&offset=0'
    );
  }

  public getTopTracks(): Observable<TopItems<Track>> {
    return this.sRequest.get<TopItems<Track>>(
      'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50&offset=0'
    );
  }

  public getFollowedArtists(): Observable<ArtistsPaged> {
    return this.sRequest
      .get<{ artists: ArtistsPaged }>(
        'https://api.spotify.com/v1/me/following?type=artist'
      )
      .pipe(map((artistPaged) => artistPaged.artists));
  }
}
