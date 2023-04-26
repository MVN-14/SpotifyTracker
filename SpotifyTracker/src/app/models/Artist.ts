import { SimplifiedArtist } from './SimplifiedArtist';
import { Followers, Images, TableRow } from './index';

export class Artist extends SimplifiedArtist {
  followers: Followers = new Followers();
  genres: string[] = [];
  images: Images[] = [];
  popularity: number = 0;

  public static fromJSON(data: any): Artist {
    const artist: Artist = new Artist();

    artist.followers = data.followers;
    artist.genres = data.genres;
    artist.images = data.images;
    artist.popularity = data.popularity;

    // SimplifiedArtist properties
    artist.external_urls = data.external_urls;
    artist.href = data.href;
    artist.id = data.id;
    artist.name = data.name;
    artist.type = data.type;
    artist.uri = data.uri;

    return artist;
  }

  public static GetTableColumnNames(): string[] {
    return ['', 'Artist', 'Followers'];
  }

  public getGenreString(): string {
    if (!this.genres) return 'N/A';

    let genresString: string = '';
    this.genres.forEach((genre, idx) => {
      genresString += genre;
      if (idx !== this.genres.length - 1) {
        genresString += ', ';
      }
    });
    return genresString;
  }

  public getGenreSeed(): string {
    if (this.genres.length <= 5)
      return this.getGenreString().replace(/\s/g, '');

    const genres: string[] = this.genres.slice(0, 5);
    let genreSeed: string = '';
    genres.forEach((genre, idx) => {
      genreSeed += genre;
      if (idx !== this.genres.length - 1) {
        genreSeed += ',';
      }
    });
    return genreSeed;
  }

  public getTableRow(): TableRow {
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
          text: this.followers.total.toString(),
        },
      ],
    };
  }
}
