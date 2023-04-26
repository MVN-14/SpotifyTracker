import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TopArtist, Track } from 'src/app/models';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'top-items',
  templateUrl: './top-items.component.html',
  styleUrls: ['./top-items.component.scss'],
})
export class TopItemsComponent implements OnInit {
  showingTracks: boolean = true;
  range: string = 'short_term';

  topArtists$?: Observable<TopArtist[]>;
  topTracks$?: Observable<Track[]>;

  constructor(private sUser: UserService) {}

  ngOnInit(): void {
    this.refreshSubscriptions();
  }

  protected onRangeChange(e: any): void {
    this.range = e.target.value;
    this.refreshSubscriptions();
  }

  protected refreshSubscriptions(): void {
    this.topArtists$ = this.sUser.getTopArtists(this.range);
    this.topTracks$ = this.sUser.getTopTracks(this.range);
  }
}
