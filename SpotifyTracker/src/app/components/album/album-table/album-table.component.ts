import { Component, Input } from '@angular/core';
import { Album, TableRow } from '../../../models';

@Component({
  selector: 'album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.scss'],
})
export class AlbumTableComponent {
  @Input() albums?: Album[];

  protected getColumnNames(): string[] {
    return Album.GetColumnNames();
  }

  protected getTableRows(): TableRow[] {
    return this.albums?.map((album) => album.getRowData()) ?? [];
  }
}
