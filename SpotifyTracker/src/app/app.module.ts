import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { RecentComponent } from './components/user/recent/recent.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopItemsComponent } from './components/user/top-items/top-items.component';
import { TrackTableComponent } from './components/track/track-table/track-table.component';
import { ArtistTableComponent } from './components/artist/artist-table/artist-table.component';
import { TrackViewComponent } from './components/track/track-view/track-view.component';
import { ArtistViewComponent } from './components/artist/artist-view/artist-view.component';
import { TopTracksComponent } from './components/artist/top-tracks/top-tracks.component';
import { RelatedArtistsComponent } from './components/artist/related-artists/related-artists.component';
import { AlbumTableComponent } from './components/album/album-table/album-table.component';
import { ArtistAlbumsComponent } from './components';
import { TrackRecommendationsComponent } from './components/track/track-recommendations/track-recommendations.component';
import { AlbumViewComponent } from './components/album/album-view/album-view.component';
import { ItemTableComponent } from './components/item-table/item-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserProfileComponent,
    RecentComponent,
    NavbarComponent,
    TopItemsComponent,
    TrackTableComponent,
    ArtistTableComponent,
    TrackViewComponent,
    ArtistViewComponent,
    TopTracksComponent,
    RelatedArtistsComponent,
    AlbumTableComponent,
    ArtistAlbumsComponent,
    TrackRecommendationsComponent,
    AlbumViewComponent,
    ItemTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
