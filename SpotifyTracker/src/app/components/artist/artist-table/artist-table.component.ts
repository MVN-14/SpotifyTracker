import { Component, Input } from '@angular/core';
import { Artist, TableRow } from '../../../models';

@Component({
  selector: 'artist-table',
  templateUrl: './artist-table.component.html',
  styleUrls: ['./artist-table.component.scss'],
})
export class ArtistTableComponent {
  @Input() artists?: Artist[];
  @Input() size: string = 'large';

  tableRows: TableRow[] = [
    {
      data: [
        {
          element: 'a',
          text: 'test link',
          href: '#',
        },
        {
          element: 'a',
          text: 'test link',
          href: '#',
        },
      ],
    },
  ];

  getColumnNames(): string[] {
    return Artist.getTableColumnNames();
  }

  getTableRows(): TableRow[] {
    return this.artists?.map((artist) => artist.getTableRow()) ?? [];
  }

  redirectToArtist(artist: Artist): void {
    window.location.href = `artist/${artist.id}`;
  }
}
