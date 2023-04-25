import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Artist } from 'src/app/models';
import { ArtistService } from 'src/app/service';

@Component({
  selector: 'related-artists',
  templateUrl: './related-artists.component.html',
  styleUrls: ['./related-artists.component.scss'],
})
export class RelatedArtistsComponent implements OnInit {
  @Input() relatedArtists?: Artist[];

  constructor(private route: ActivatedRoute, private sArtist: ArtistService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params['id']) return;

      this.sArtist
        .getRelatedArtistsByArtistId(params['id'])
        .pipe(take(1))
        .subscribe((artists) => {
          this.relatedArtists = artists.artists.map((artist) =>
            Artist.fromJSON(artist)
          );
        });
    });
  }
}