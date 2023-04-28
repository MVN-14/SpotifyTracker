import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { Album, Track } from 'src/app/models';
import { AlbumService, UserService } from 'src/app/service';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss'],
})
export class AlbumViewComponent implements OnInit {
  album$?: Observable<Album>;
  tracks$?: Observable<Track[]>;

  constructor(
    private route: ActivatedRoute,
    private sAlbum: AlbumService,
    private sUser: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params['id']) return;

      this.sUser
        .getCurrentUserProfile()
        .pipe(take(1))
        .subscribe((userProfile) => {
          this.album$ = this.sAlbum.getAlbumById(
            params['id'],
            userProfile.country
          );

          this.tracks$ = this.sAlbum.getAlbumTracks(
            params['id'],
            userProfile.country
          );
        });
    });
  }
}
