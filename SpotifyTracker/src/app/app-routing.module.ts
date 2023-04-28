import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  LoginComponent,
  HomeComponent,
  UserProfileComponent,
  TopItemsComponent,
  RecentComponent,
  TrackViewComponent,
  ArtistViewComponent,
  AlbumViewComponent,
} from './components';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'top-items',
    component: TopItemsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'recent',
    component: RecentComponent,
    canActivate: [authGuard],
  },
  {
    path: 'track/:id',
    component: TrackViewComponent,
    canActivate: [authGuard],
  },
  {
    path: 'artist/:id',
    component: ArtistViewComponent,
    canActivate: [authGuard],
  },
  {
    path: 'album/:id',
    component: AlbumViewComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
