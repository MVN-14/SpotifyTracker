import { Component, Input } from '@angular/core';
import { TableRow, PlayHistory } from 'src/app/models';

@Component({
  selector: 'play-history-table',
  templateUrl: './play-history-table.component.html',
  styleUrls: ['./play-history-table.component.scss'],
})
export class PlayHistoryTableComponent {
  @Input() playHistorys?: PlayHistory[];

  protected getColumnNames(): string[] {
    return PlayHistory.GetColumnNames();
  }

  protected getTableRows(): TableRow[] {
    return (
      this.playHistorys?.map((playHistory) => playHistory.getTableRow()) ?? []
    );
  }
}
