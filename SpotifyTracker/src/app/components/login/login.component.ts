import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { take } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sAuth: AuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['access_token'] && params['refresh_token']) {
        sessionStorage.setItem('access_token', params['access_token']);
        sessionStorage.setItem('refresh_token', params['refresh_token']);
        this.router.navigate(['/home']);
      }
    });
  }

  protected redirectToLogin(): void {
    window.location.href = this.sAuth.getLoginUrl();
  }
}
