import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private sAuth: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if(params["access_token"] && params["refresh_token"]) {
        sessionStorage.setItem("access_token", params["access_token"]);
        sessionStorage.setItem("refresh_token", params["refresh_token"]);
        this.router.navigate(["/home"]);
      }
    });
  }

  redirectToLogin(): void {
    console.log("test");
    
    this.sAuth.getLoginUrl().subscribe(({data}) => {
      window.location.href = data;
    });
  }
}
