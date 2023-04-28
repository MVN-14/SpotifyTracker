import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { Track } from 'src/app/models';
import { TrackService, UserService } from 'src/app/service';

@Component({
  selector: 'app-track-view',
  templateUrl: './track-view.component.html',
  styleUrls: ['./track-view.component.scss'],
})
export class TrackViewComponent implements OnInit {
  track$?: Observable<Track>;
  recommendedTracks$?: Observable<Track[]>;

  constructor(
    private sTrack: TrackService,
    private route: ActivatedRoute,
    private sUser: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params['id']) return;

      this.track$ = this.sTrack.getTrackById(params['id']).pipe(
        tap((track) => {
          this.sUser
            .getCurrentUserProfile()
            .pipe(take(1))
            .subscribe((userProfile) => {
              this.recommendedTracks$ = this.sTrack.getTrackRecommendations(
                userProfile.country,
                track.id
              );
            });
        })
      );
    });
  }
}
