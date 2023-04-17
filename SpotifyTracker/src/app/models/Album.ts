import { SimplifiedArtist } from "./SimplifiedArtist";
import { ExternalUrls, Images, Restrictions, Copyrights, ExternalIDs, Artist } from "./index";

export class Album {
  album_type: string = "";
  total_tracks: number = 0;
  available_markets: string[] = [];
  external_urls: ExternalUrls = new ExternalUrls();
  href: string = "";
  id: string = "";
  images: Images[] = [];
  name: string = "";
  release_date: string = "";
  release_date_precision: string = "";
  restrictions: Restrictions = new Restrictions();
  type: string = "";
  uri: string = "";
  copyrights: Copyrights = new Copyrights();
  external_ids: ExternalIDs = new ExternalIDs();
  genres: string[] = [];
  label: string = "";
  popularity: number = 0;
  album_group: string = "";
  artists: SimplifiedArtist[] = [];

  public static fromJSON(data: any) {
    const album: Album = new Album();
    album.album_type = data.album_type;
    album.total_tracks = data.total_tracks;
    album.available_markets = data.available_markets;
    album.external_urls = data.external_urls;
    album.href = data.href;
    album.id = data.id;
    album.images = data.images;
    album.name = data.name;
    album.release_date = data.release_date;
    album.release_date_precision = data.release_date_precision;
    album.restrictions = data.restrictions;
    album.type = data.type;
    album.uri = data.uri;
    album.copyrights = data.copyrights;
    album.external_ids = data.external_ids;
    album.genres = data.genres;
    album.label = data.label;
    album.popularity = data.popularity;
    album.album_group = data.album_group;
    album.artists = data.artists.map((artist: any) => Artist.fromJSON(artist));
    return album
  }

  getGenreString(): string {
    if (!this.genres)
      return "N/A";

    let genresString: string = "";
    this.genres.forEach((genre, idx) => {
      genresString += (genre);
      if (idx !== this.genres.length - 1) {
        genresString += ", ";
      }
    });
    return genresString;
  }

  getArtistString(): string {
    let artistsString: string = "";
    this.artists.forEach((artist, idx) => {
      artistsString += artist.name;
      if (idx !== this.artists.length - 1) {
        artistsString += ", ";
      }
    });
    return artistsString;
  }

}