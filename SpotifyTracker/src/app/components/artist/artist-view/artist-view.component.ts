import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Album, Artist, ArtistAlbums, Track } from 'src/app/models';
import { ArtistService } from 'src/app/service';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss'],
})
export class ArtistViewComponent implements OnInit {
  artist$?: Observable<Artist>;

  albums?: ArtistAlbums;
  relatedArtists$?: Observable<Artist[]>;
  topTracks: Track[] = [];

  constructor(private sArtist: ArtistService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params['id']) return;

      this.artist$ = this.sArtist.getArtistById(params['id']);
      this.relatedArtists$ = this.sArtist.getRelatedArtistsByArtistId(
        params['id']
      );
    });
  }
}
