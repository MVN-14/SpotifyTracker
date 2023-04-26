import { Component, Input } from '@angular/core';
import { Artist, TableRow, TopArtist } from '../../../models';

@Component({
  selector: 'artist-table',
  templateUrl: './artist-table.component.html',
  styleUrls: ['./artist-table.component.scss'],
})
export class ArtistTableComponent {
  @Input() artists?: Artist[] | TopArtist[];

  protected getColumnNames(): string[] {
    if (!this.artists) return [];

    if (this.artists[0] instanceof TopArtist) {
      return TopArtist.GetTableColumnNames();
    }
    return Artist.GetTableColumnNames();
  }

  protected getTableRows(): TableRow[] {
    return this.artists?.map((artist) => artist.getTableRow()) ?? [];
  }
}
