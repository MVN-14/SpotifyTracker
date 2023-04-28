import { Injectable } from '@angular/core';
import { Artist, ArtistAlbums, Track } from '../models';
import { Observable, map } from 'rxjs';
import { GenericRequestSerice } from './generic.request.service';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private sRequest: GenericRequestSerice) {}

  public getArtistById(id: string): Observable<Artist> {
    return this.sRequest.get<Artist>(
      `https://api.spotify.com/v1/artists/${id}`
    );
  }

  public getTopTracksByArtistId(
    id: string,
    country: string
  ): Observable<{ tracks: Track[] }> {
    return this.sRequest.get<{ tracks: Track[] }>(
      `https://api.spotify.com/v1/artists/${id}/top-tracks?market=${country}`
    );
  }

  public getRelatedArtistsByArtistId(id: string): Observable<Artist[]> {
    return this.sRequest
      .get<{ artists: Artist[] }>(
        `https://api.spotify.com/v1/artists/${id}/related-artists`
      )
      .pipe(
        map((data: { artists: Artist[] }) =>
          data.artists.map((artist) => Artist.fromJSON(artist))
        )
      );
  }

  public getAlbumsByArtistId(
    id: string,
    country: string
  ): Observable<ArtistAlbums> {
    return this.sRequest.get<ArtistAlbums>(
      `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single,appears_on,compilation&market=${country}&limit=50`
    );
  }
}
