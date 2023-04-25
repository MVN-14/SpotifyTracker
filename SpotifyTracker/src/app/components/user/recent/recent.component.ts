import { Component, OnInit } from '@angular/core';
import { PlayHistory, RecentlyPlayedTracks } from 'src/app/models';
import { PlayerService } from '../../../service';
import { take } from 'rxjs';
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss'],
})
export class RecentComponent implements OnInit {
  recentlyPlayedTracks: RecentlyPlayedTracks = new RecentlyPlayedTracks();
  playHistory: PlayHistory[] = [];

  constructor(private sPlayer: PlayerService) {}

  ngOnInit(): void {
    this.sPlayer
      .getRecentlyPlayedTracks()
      .pipe(take(1))
      .subscribe((recentlyPlayedTracks) => {
        this.recentlyPlayedTracks =
          RecentlyPlayedTracks.fromJSON(recentlyPlayedTracks);
      });
  }

  redirectToTrack(id: string): void {
    window.location.href = `track/${id}`;
  }
}
