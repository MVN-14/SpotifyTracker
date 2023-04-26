import { Component, Input } from '@angular/core';
import { TableRow, Track } from 'src/app/models';

@Component({
  selector: 'track-table',
  templateUrl: './track-table.component.html',
  styleUrls: ['./track-table.component.scss'],
})
export class TrackTableComponent {
  @Input() tracks: Track[] = [];
  @Input() size: string = 'large';
  @Input() simplified: boolean = false;

  protected getColumnNames(): string[] {
    return Track.GetColumnNames();
  }

  protected getTableRows(): TableRow[] {
    return this.tracks.map((track) => track.getTableRow());
  }
}
