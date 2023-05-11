import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private route: ActivatedRoute, private sAuth: AuthService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params['access_token'] && params['refresh_token']) {
        sessionStorage.setItem('access_token', params['access_token']);
        sessionStorage.setItem('refresh_token', params['refresh_token']);
        window.location.href = '/profile';
      }
    });
  }

  protected redirectToLogin(): void {
    window.location.href = this.sAuth.getLoginUrl();
  }
}
