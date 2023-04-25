import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Track } from 'src/app/models';
import { TrackService } from 'src/app/service';

@Component({
  selector: 'app-track-view',
  templateUrl: './track-view.component.html',
  styleUrls: ['./track-view.component.scss'],
})
export class TrackViewComponent implements OnInit {
  track: Track = new Track();

  constructor(private sTrack: TrackService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params['id']) return;
      
      this.sTrack
        .getTrackById(params['id'])
        .pipe(take(1))
        .subscribe((track) => {
          this.track = Track.fromJSON(track);
        });
    });
  }
}
