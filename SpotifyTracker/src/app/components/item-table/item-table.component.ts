import { Component, Input } from '@angular/core';
import { TableRow } from 'src/app/models';
@Component({
  selector: 'item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss'],
})
export class ItemTableComponent {
  @Input() columnNames?: string[];
  @Input() tableRows?: TableRow[];

  protected onClick(tableRow: TableRow): void {
    if (tableRow.href) {
      window.location.href = tableRow.href;
    }
  }
}
