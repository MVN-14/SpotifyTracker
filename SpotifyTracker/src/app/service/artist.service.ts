import { Injectable } from '@angular/core';
import { Artist, ArtistAlbums, Track } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtistById(id: string): Observable<Artist> {
    return this.http.get<Artist>(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
      Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
      }
    });
  }

  getTopTracksByArtistId(id: string, country: string): Observable<{tracks: Track[]}> {
    return this.http.get<{ tracks: Track[] }>(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=${country}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
      }
    });
  }

  getRelatedArtistsByArtistId(id: string): Observable<{artists: Artist[]}> {
    return this.http.get<{ artists: Artist[] }>(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
      }
    });
  }

  getAlbumsByArtistId(id: string, country: string): Observable<ArtistAlbums> {
    return this.http.get<ArtistAlbums>(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single,appears_on,compilation&market=${country}&limit=50`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
      }
    });
  }
}

