import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Observable, map } from 'rxjs';
import { Artist, UserProfile } from 'src/app/models';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  expanded: boolean = true;

  artists$?: Observable<Artist[]>;
  userProfile$?: Observable<UserProfile>;

  constructor(private sUser: UserService) {}

  ngOnInit(): void {
    this.artists$ = this.sUser.getFollowedArtists();
    this.userProfile$ = this.sUser.getCurrentUserProfile();
  }
}
