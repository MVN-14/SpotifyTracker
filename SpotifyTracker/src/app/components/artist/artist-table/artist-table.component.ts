import { Component, Input } from '@angular/core';
import { Artist } from "../../../models";

@Component({
  selector: 'artist-table',
  templateUrl: './artist-table.component.html',
  styleUrls: ['./artist-table.component.scss']
})
export class ArtistTableComponent {
  @Input() artists: Artist[] = [];
  @Input() size: string = "large"

  redirectToArtist(artist: Artist): void {
    window.location.href = `artist/${artist.id}`;
  }
}
