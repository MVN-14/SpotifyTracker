import { Cursors, PlayHistory } from './index';

export interface RecentlyPlayedTracks {
  href: string;
  limit: number;
  next: string;
  cursors: Cursors;
  total: number;
  items: PlayHistory[];
}
