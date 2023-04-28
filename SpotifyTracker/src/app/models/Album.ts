import {
  ExternalUrls,
  Image,
  Copyrights,
  ExternalIDs,
  Artist,
  Track,
  TableRow,
  SimplifiedArtist,
} from './index';

export class Album {
  album_type: string = '';
  total_tracks: number = 0;
  available_markets: string[] = [];
  external_urls: ExternalUrls = { spotify: '' };
  href: string = '';
  id: string = '';
  images: Image[] = [];
  name: string = '';
  release_date: string = '';
  release_date_precision: string = '';
  restrictions: { reason: string } = { reason: '' };
  type: string = '';
  uri: string = '';
  copyrights: Copyrights[] = [];
  external_ids: ExternalIDs = { isrc: '', upc: '', ean: '' };
  genres: string[] = [];
  label: string = '';
  popularity: number = 0;
  album_group: string = '';
  artists: SimplifiedArtist[] = [];
  tracks: Track[] = [];

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
    album.tracks = data?.tracks?.items?.map((track: any) =>
      Track.fromJSON(track)
    );
    return album;
  }

  public static GetColumnNames(): string[] {
    return ['', 'Release Date', 'Type'];
  }

  public static GetAlbumTrackColumnNames(): string[] {
    return ['#', 'Track', 'Length'];
  }

  public getRowData(): TableRow {
    return {
      data: [
        {
          element: 'img',
          src: this.images[0].url,
        },
        {
          element: 'p',
          text: this.name,
        },
        {
          element: 'p',
          text: this.release_date,
        },
        {
          element: 'p',
          text: this.album_type,
        },
      ],
    };
  }

  public static GetAlbumTrackRowData(track: Track): TableRow {
    return {
      data: [
        {
          element: 'p',
          text: track.track_number.toString(),
        },
        {
          element: 'p',
          text: track.name,
        },
        {
          element: 'p',
          text: new Date(track.duration_ms).toLocaleTimeString([], {
            minute: '2-digit',
            second: '2-digit',
          }),
        },
      ],
      href: `/track/${track.id}`,
    };
  }

  public getGenreString(): string {
    if (!this.genres?.length) return 'N/A';

    let genresString: string = '';
    this.genres.forEach((genre, idx) => {
      genresString += genre;
      if (idx !== this.genres.length - 1) {
        genresString += ', ';
      }
    });
    return genresString;
  }

  public getArtistString(): string {
    let artistsString: string = '';
    this.artists.forEach((artist, idx) => {
      artistsString += artist.name;
      if (idx !== this.artists.length - 1) {
        artistsString += ', ';
      }
    });
    return artistsString;
  }
}
