import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UserProfile } from '../../../models/UserProfile';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  
  userProfile: UserProfile = new UserProfile();
  photoIndex: number = 0;

  constructor(private sUser: UserService) { }

  ngOnInit(): void {
    this.sUser.getCurrentUserProfile().subscribe((userProfile) => {
      this.userProfile = userProfile;
    })
  }

  getUserJsonString(): string {
    return JSON.stringify(this.userProfile);
  }

  getPhotoUrl(): string {
    return this.userProfile.images[this.photoIndex].url ?? "";
  }

  getRowData(): {label: string, value: string}[] {
    return [
      { label: "Email", value: this.userProfile.email },
      { label: "Country", value: this.userProfile.country },
      { label: "Followers", value: this.userProfile.followers.total.toString() },
      { label: "Profile Link", value: this.userProfile.href },
      { label: "ID", value: this.userProfile.id },
      { label: "Subscription", value: this.userProfile.product },
      { label: "Type", value: this.userProfile.type },
      { label: "URI", value: this.userProfile.uri }
    ];
  }
}
