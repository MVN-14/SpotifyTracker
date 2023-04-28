import { Artist, Cursors } from './index';

export interface ArtistsPaged {
  href: string;
  limit: number;
  next: string;
  cursors: Cursors;
  total: number;
  items: Artist[];
}
