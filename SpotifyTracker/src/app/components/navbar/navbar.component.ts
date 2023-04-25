import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { UserProfile } from 'src/app/models';
import { AuthService } from 'src/app/service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  activeNav?: string;

  userProfile$?: Observable<UserProfile>;

  constructor(private sUser: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userProfile$ = this.sUser.getCurrentUserProfile();
  }

  ngAfterViewInit(): void {
    const url: string = window.location.href;

    if (url.includes('home')) {
      this.activeNav = 'home';
    } else if (url.includes('profile')) {
      this.activeNav = 'profile';
    } else if (url.includes('top-items')) {
      this.activeNav = 'top-items';
    } else if (url.includes('recent')) {
      this.activeNav = 'recent';
    } else if (url.includes('login')) {
      this.activeNav = 'login';
    }
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('access_token');
  }

  onLoginClicked(): void {
    window.location.href = 'login';
  }
}
