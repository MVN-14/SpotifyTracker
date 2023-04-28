import { Artist, TableRow } from './index';

export class TopArtist extends Artist {
  public static override GetTableColumnNames(): string[] {
    return ['', 'Artist', 'Genre', 'Popularity'];
  }

  public override getTableRow(): TableRow {
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
          text: this.genres[0],
        },
        {
          element: 'p',
          text: this.popularity.toString(),
        },
      ],
      href: `/artist/${this.id}`,
    };
  }

  public static override fromJSON(data: any): TopArtist {
    const artist: TopArtist = new TopArtist();

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
}
