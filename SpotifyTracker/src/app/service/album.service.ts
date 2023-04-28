import { Injectable } from '@angular/core';
import { Album, Track } from '../models';
import { Observable, map } from 'rxjs';
import { GenericRequestSerice } from './generic.request.service';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private sRequest: GenericRequestSerice) {}

  public getAlbumById(id: string, market: string): Observable<Album> {
    return this.sRequest.get<Album>(
      `https://api.spotify.com/v1/albums/${id}?market=${market}`
    );
  }

  public getAlbumTracks(id: string, market: string): Observable<Track[]> {
    return this.sRequest
      .get<{ items: Track[] }>(
        `https://api.spotify.com/v1/albums/${id}/tracks?market=${market}&limit=50`
      )
      .pipe(
        map((response) => response.items.map((track) => Track.fromJSON(track)))
      );
  }
}
