import { Component, OnInit } from '@angular/core';
import { RecentlyPlayedTracks } from 'src/app/models';
import { PlayerService } from '../../../service';
import { Observable, concat, tap } from 'rxjs';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss'],
})
export class RecentComponent implements OnInit {
  recentlyPlayedTracks$?: Observable<RecentlyPlayedTracks>;
  nextUrl?: string;
  constructor(private sPlayer: PlayerService) {}

  ngOnInit(): void {
    this.recentlyPlayedTracks$ = this.sPlayer
      .getRecentlyPlayedTracks()
      .pipe(
        tap(
          (recentlyPlayedTracks) => (this.nextUrl = recentlyPlayedTracks.next)
        )
      );
  }

  protected loadMoreTracks(): void {
    if (!this.recentlyPlayedTracks$ || !this.nextUrl) return;

    this.recentlyPlayedTracks$ = concat(
      this.recentlyPlayedTracks$,
      this.sPlayer.getNextRecentlyPlayedTracks(this.nextUrl)
    );
  }

  protected redirectToTrack(id: string): void {
    window.location.href = `track/${id}`;
  }
}
