import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/models';

@Component({
  selector: 'top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.scss']
})
export class TopTracksComponent implements OnInit {
  @Input() topTracks: Track[] = [];

  ngOnInit(): void {

  }
}
