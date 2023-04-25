import { Component, Input } from '@angular/core';
import { Album } from 'src/app/models';

@Component({
  selector: 'artist-albums',
  templateUrl: './artist-albums.component.html',
  styleUrls: ['./artist-albums.component.scss'],
})
export class ArtistAlbumsComponent {
  @Input() albums?: Album[];
}
