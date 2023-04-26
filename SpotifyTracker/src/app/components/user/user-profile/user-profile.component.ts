import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Observable, map } from 'rxjs';
import { Artist, ArtistsPaged, UserProfile } from 'src/app/models';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  artistsPaged?: ArtistsPaged;
  expanded: boolean = true;

  artists$?: Observable<Artist[]>;
  userProfile$?: Observable<UserProfile>;

  constructor(private sUser: UserService) {}

  ngOnInit(): void {
    this.artists$ = this.sUser
      .getFollowedArtists()
      .pipe(
        map((artistsPaged) =>
          artistsPaged.items.map((artist: Artist) => Artist.fromJSON(artist))
        )
      );
    this.userProfile$ = this.sUser.getCurrentUserProfile();
  }
}
