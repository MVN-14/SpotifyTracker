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

  constructor(private sPlayer: PlayerService) {}

  ngOnInit(): void {
    this.recentlyPlayedTracks$ = this.sPlayer.getRecentlyPlayedTracks();
  }
}
