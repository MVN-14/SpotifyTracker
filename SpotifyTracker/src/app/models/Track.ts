import {
  Album,
  ExternalIDs,
  ExternalUrls,
  SimplifiedArtist,
  TableRow,
} from './index';

export class Track {
  album: Album = new Album();
  artists: SimplifiedArtist[] = [];
  available_markets: string[] = [];
  disc_number: number = 0;
  duration_ms: number = 0;
  explicit: boolean = false;
  external_ids: ExternalIDs = { isrc: '', upc: '', ean: '' };
  external_urls: ExternalUrls = { spotify: '' };
  href: string = '';
  id: string = '';
  is_playable: boolean = false;
  restrictions: { reason: string } = { reason: '' };
  name: string = '';
  popularity: number = 0;
  preview_url: string = '';
  track_number: number = 0;
  type: string = '';
  uri: string = '';
  is_local: boolean = false;

  public static GetColumnNames(): string[] {
    return ['', 'Track', 'Artist', 'Length'];
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

  public getTableRow(): TableRow {
    return {
      data: [
        {
          element: 'img',
          src: this.album.images[0].url,
        },
        {
          element: 'p',
          text: this.name,
        },
        {
          element: 'p',
          text: this.getArtistString(),
        },
        {
          element: 'p',
          text: new Date(this.duration_ms).toLocaleTimeString([], {
            minute: '2-digit',
            second: '2-digit',
          }),
        },
      ],
      href: `/track/${this.id}`,
    };
  }
}
