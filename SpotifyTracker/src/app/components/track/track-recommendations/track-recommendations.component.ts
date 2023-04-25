import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Recommendation, Track } from 'src/app/models';
import { TrackService, UserService } from 'src/app/service';

@Component({
  selector: 'track-recommendations',
  templateUrl: './track-recommendations.component.html',
  styleUrls: ['./track-recommendations.component.scss'],
})
export class TrackRecommendationsComponent implements OnInit {
  @Input() track: Track = new Track();
  @Input() height: number = 200;
  recommendation: Recommendation = new Recommendation();

  constructor(private sTrack: TrackService, private sUser: UserService) {}

  ngOnInit(): void {
    this.sUser
      .getCurrentUserProfile()
      .pipe(take(1))
      .subscribe((userProfile) => {
        this.sTrack
          .getTrackRecommendations(
            this.track.getArtistSeed(),
            '',
            this.track.id,
            userProfile.country
          )
          .pipe(take(1))
          .subscribe((recommendation) => {
            this.recommendation = Recommendation.fromJSON(recommendation);
          });
      });
  }
}
