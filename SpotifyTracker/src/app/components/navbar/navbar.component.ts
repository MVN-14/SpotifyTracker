import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  activeNav?: string;

  ngOnInit(): void {
    const url: string = window.location.href;
    this.isLoggedIn = !!sessionStorage.getItem('access_token');

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
}
