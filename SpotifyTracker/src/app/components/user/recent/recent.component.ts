import { Component, OnInit } from '@angular/core';
import { PlayHistory } from 'src/app/models';
import { PlayerService } from '../../../service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss'],
})
export class RecentComponent implements OnInit {
  recentlyPlayedTracks$?: Observable<PlayHistory[]>;

  constructor(private sPlayer: PlayerService) {}

  ngOnInit(): void {
    this.recentlyPlayedTracks$ = this.sPlayer.getRecentlyPlayedTracks();
  }
}
