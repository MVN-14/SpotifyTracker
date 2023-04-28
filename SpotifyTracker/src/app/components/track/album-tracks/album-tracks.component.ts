import { Component, Input } from '@angular/core';
import { Album, TableRow, Track } from 'src/app/models';

@Component({
  selector: 'album-tracks',
  templateUrl: './album-tracks.component.html',
  styleUrls: ['./album-tracks.component.scss'],
})
export class AlbumTracksComponent {
  @Input() tracks?: Track[];
  protected getColumnNames(): string[] {
    return Album.GetAlbumTrackColumnNames();
  }

  protected getTableRows(): TableRow[] {
    return this.tracks?.map((track) => Album.GetAlbumTrackRowData(track)) ?? [];
  }
}
