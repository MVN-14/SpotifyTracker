// import {
//   HttpErrorResponse,
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Injectable, Injector } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable, catchError, of, take } from 'rxjs';
// import { AuthService } from './service';

// @Injectable()
// export class Interceptor implements HttpInterceptor {
//   constructor(private injector: Injector, private router: Router) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     if (!req.url.includes('api.spotify.com/')) {
//       req.headers.append(
//         'Authorization',
//         `Bearer ${sessionStorage.getItem('access_token')}`
//       );
//     }
//     return next
//       .handle(req)
//       .pipe(catchError((error) => this.handleAuthError(error)));
//   }

//   private handleAuthError(error: HttpErrorResponse): Observable<any> {
//     if (error && error.status === 401) {
//       let authService = this.injector.get(AuthService);
//       authService
//         .refreshAccessToken()
//         .pipe(take(1))
//         .subscribe((response) => {
//           sessionStorage.setItem('access_token', response.data.access_token);
//           sessionStorage.setItem('refresh_token', response.data.refresh_token);
//         });
//     }
//     return of('refreshed token');
//   }
// }
