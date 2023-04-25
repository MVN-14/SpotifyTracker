import { Component, Input } from '@angular/core';
import { Track } from 'src/app/models';

@Component({
  selector: 'track-table',
  templateUrl: './track-table.component.html',
  styleUrls: ['./track-table.component.scss'],
})
export class TrackTableComponent {
  @Input() tracks: Track[] = [];
  @Input() size: string = 'large';
  @Input() simplified: boolean = false;

  redirectToTrack(track: Track): void {
    window.location.href = `track/${track.id}`;
  }
}
