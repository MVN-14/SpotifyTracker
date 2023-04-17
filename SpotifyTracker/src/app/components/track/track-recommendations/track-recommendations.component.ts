import { Component, Input, OnInit } from '@angular/core';
import { Artist, Recommendation, Track, UserProfile } from 'src/app/models';
import { ArtistService, TrackService, UserService } from 'src/app/service';

@Component({
  selector: 'track-recommendations',
  templateUrl: './track-recommendations.component.html',
  styleUrls: ['./track-recommendations.component.scss']
})
export class TrackRecommendationsComponent implements OnInit {
  @Input() track: Track = new Track();
  recommendation: Recommendation = new Recommendation();

  constructor(private sTrack: TrackService,
              private sUser: UserService,
              private sArtist: ArtistService) {}

  ngOnInit(): void {
    this.sArtist.getArtistById(this.track.artists[0].id).subscribe((artist) => {
      this.sUser.getCurrentUserProfile().subscribe((userProfile) => { 
        this.sTrack.getTrackRecommendations(this.track.getArtistSeed(), "", this.track.id, userProfile.country).subscribe((recommendation) => {
          this.recommendation = Recommendation.fromJSON(recommendation);
        });
      });
    });
  }
}
