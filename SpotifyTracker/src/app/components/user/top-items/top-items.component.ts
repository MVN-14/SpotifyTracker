import { Component, OnInit } from '@angular/core';
import { Artist, TopItems, Track } from 'src/app/models';
import { ArtistService } from 'src/app/service/artist.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'top-items',
  templateUrl: './top-items.component.html',
  styleUrls: ['./top-items.component.scss']
})
export class TopItemsComponent implements OnInit {
  showingTracks: boolean = true;

  topArtists: TopItems<Artist> = new TopItems<Artist>();
  topTracks: TopItems<Track> = new TopItems<Track>();

  constructor(private sUser: UserService) {}
  
  ngOnInit(): void {
    this.sUser.getTopArtists().subscribe((topArtists) => {
      this.topArtists = topArtists
      this.topArtists.items = topArtists.items.map<Artist>((artist) => {
        return Artist.fromJSON(artist);
      })
    });
    this.sUser.getTopTracks().subscribe((topTracks) => {
      this.topTracks = topTracks;
      this.topTracks.items = topTracks.items.map<Track>((track) => {
        return Track.fromJSON(track);
      });
    });
  }
}
