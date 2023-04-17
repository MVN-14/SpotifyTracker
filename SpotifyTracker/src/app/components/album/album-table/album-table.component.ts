import { Component, Input } from '@angular/core';
import { Album } from "../../../models";

@Component({
  selector: 'album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.scss']
})
export class AlbumTableComponent {
  @Input() albums: Album[] = [];
  @Input() size: string = "large";

  redirectToAlbum(album: Album): void {

  }
}
