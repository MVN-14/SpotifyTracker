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
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'top-items',
    component: TopItemsComponent,
  },
  {
    path: 'recent',
    component: RecentComponent,
  },
  {
    path: 'track/:id',
    component: TrackViewComponent,
  },
  {
    path: 'artist/:id',
    component: ArtistViewComponent,
  },
  {
    path: 'album/:id',
    component: AlbumViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
