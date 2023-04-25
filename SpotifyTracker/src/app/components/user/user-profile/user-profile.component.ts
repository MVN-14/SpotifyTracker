import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { take } from 'rxjs';
import { Artist, ArtistsPaged, UserProfile } from 'src/app/models';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userProfile?: UserProfile;
  artistsPaged?: ArtistsPaged;

  constructor(private sUser: UserService) {}

  ngOnInit(): void {
    this.sUser
      .getFollowedArtists()
      .pipe(take(1))
      .subscribe((artistsPaged) => {
        this.artistsPaged = artistsPaged.artists;
        this.artistsPaged.items = artistsPaged.artists.items.map((artist) =>
          Artist.fromJSON(artist)
        );
      });

    this.sUser
      .getCurrentUserProfile()
      .pipe(take(1))
      .subscribe((userProfile) => {
        this.userProfile = userProfile;
      });
  }
}
