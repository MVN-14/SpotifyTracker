import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild("home") home?: ElementRef;
  @ViewChild("profile") profile?: ElementRef;
  @ViewChild("topItems") topItems?: ElementRef;
  @ViewChild("recent") recent?: ElementRef;


  userProfilePhotoUrl?: string;
  displayName?: string

  constructor(private sUser: UserService) { }

  ngOnInit(): void {
    this.sUser.getCurrentUserProfile().subscribe((profile) => {
      this.userProfilePhotoUrl = profile.images[0].url;
      this.displayName = profile.display_name;
    })
  }

  ngAfterViewInit(): void {
    const url: string = window.location.href;
    if (url.includes("home")) {
      this.home?.nativeElement.classList.add("active");
    } else if (url.includes("profile")) {
      this.profile?.nativeElement.classList.add("active");
    } else if (url.includes("top-items")) {
      this.topItems?.nativeElement.classList.add("active");
    } else if (url.includes("recent")) {
      this.recent?.nativeElement.classList.add("active");
    }

  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem("access_token");
  }

  onLoginClicked(): void {
    window.location.href = "login";
  }
}
