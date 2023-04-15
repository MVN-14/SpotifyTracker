import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  accessToken: string = "";
  refreshToken: string = "";

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) { }

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
    
    this.http.get<{data: string}>("http://localhost:8008/login/url").subscribe(({data}) => {
      window.location.href = data;
    })
  }
}
