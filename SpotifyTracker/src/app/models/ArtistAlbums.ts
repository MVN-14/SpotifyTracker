import { Album } from './Album';

export class ArtistAlbums {
  href: string = '';
  limit: number = 0;
  next: string = '';
  offset: number = 0;
  previous: string = '';
  total: number = 0;
  items: Album[] = [];

  public static fromJSON(data: any): ArtistAlbums {
    const artistAlbums = new ArtistAlbums();
    artistAlbums.href = data.href;
    artistAlbums.limit = data.limit;
    artistAlbums.next = data.next;
    artistAlbums.offset = data.offset;
    artistAlbums.previous = data.previous;
    artistAlbums.total = data.total;
    artistAlbums.items = data.items.map((item: any) => Album.fromJSON(item));
    return artistAlbums;
  }
}
