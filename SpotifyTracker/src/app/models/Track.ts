import { Album, ExternalIDs, ExternalUrls, Restrictions, SimplifiedArtist } from "./index";

export class Track {
  album: Album = new Album();
  artists: SimplifiedArtist[] = [];
  available_markets: string[] = [];
  disc_number: number = 0;
  duration_ms: number = 0;
  explicit: boolean = false;
  external_ids: ExternalIDs = new ExternalIDs();
  external_urls: ExternalUrls = new ExternalUrls();
  href: string = ""; 
  id: string = "";
  is_playable: boolean = false;
  restrictions: Restrictions = new Restrictions();
  name: string = "";
  popularity: number = 0;
  preview_url: string = "";
  track_number: number = 0;
  type: string = "";
  uri: string = "";
  is_local: boolean = false;

  getAlbumPhotoUrl(): string {
    if(!this.album.images)
      return "";

    return this.album.images[0].url;
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

  getArtistSeed(): string {
    let artistSeed: string = "";
    this.artists.forEach((artist) => artistSeed += `${artist.id},`)
    return artistSeed.substring(0, artistSeed.length - 1);
  }

  getGenreString(): string {
    if(!this.album.genres)
      return "N/A";
    let genreString: string = "";
    this.album.genres.forEach((genre, idx) => {
      genreString += genre;
      if (idx !== this.artists.length - 1) {
        genreString += ", ";
      }
    });
    return genreString;
  }

  public static fromJSON(data: any): Track {
    const track: Track = new Track();
    track.album = data.album;
    track.artists = data.artists;
    track.available_markets = data.available_markets;
    track.disc_number = data.disc_number;
    track.duration_ms = data.duration_ms;
    track.explicit = data.explicit;
    track.external_ids = data.external_ids;
    track.href = data.href;
    track.id = data.id;
    track.is_playable = data.is_playable;
    track.restrictions = data.restrictions;
    track.name = data.name;
    track.popularity = data.popularity;
    track.preview_url = data.preview_url;
    track.track_number = data.track_number;
    track.type = data.type;
    track.uri = data.uri;
    track.is_local = data.is_local;
    return track;
  }

}