import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Album, Artist, ArtistAlbums, Track } from 'src/app/models';
import { ArtistService, UserService } from 'src/app/service';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss'],
})
export class ArtistViewComponent implements OnInit {
  artist?: Artist;
  albums?: ArtistAlbums;
  relatedArtists?: Artist[];

  topTracks: Track[] = [];

  constructor(
    private sArtist: ArtistService,
    private sUser: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params['id']) return;

      this.sArtist
        .getArtistById(params['id'])
        .pipe(take(1))
        .subscribe((artist) => (this.artist = Artist.fromJSON(artist)));

      this.sArtist
        .getRelatedArtistsByArtistId(params['id'])
        .pipe(take(1))
        .subscribe((relatedArtists) => {
          this.relatedArtists = relatedArtists.artists.map((artist) =>
            Artist.fromJSON(artist)
          );
        });

      this.sUser
        .getCurrentUserProfile()
        .pipe(take(1))
        .subscribe((userProfile) => {
          this.sArtist
            .getTopTracksByArtistId(params['id'], userProfile.country)
            .pipe(take(1))
            .subscribe((tracks) => {
              this.topTracks = tracks.tracks.map((track) =>
                Track.fromJSON(track)
              );
            });
          this.sArtist
            .getAlbumsByArtistId(params['id'], userProfile.country)
            .pipe(take(1))
            .subscribe((artistAlbums) => {
              this.albums = ArtistAlbums.fromJSON(artistAlbums);
              this.albums.items = artistAlbums.items.map((album) =>
                Album.fromJSON(album)
              );
            });
        });
    });
  }
}
