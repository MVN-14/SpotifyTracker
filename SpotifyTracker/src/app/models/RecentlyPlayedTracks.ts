import { Cursors, PlayHistory } from "./index";

export class RecentlyPlayedTracks {
  href: string = "";
  limit: number = 0;
  next: string = "";
  cursors: Cursors = new Cursors();
  total: number = 0;
  items: PlayHistory[] = [];

  public static fromJSON(data: any): RecentlyPlayedTracks {
    const recentlyPlayedTracks: RecentlyPlayedTracks = new RecentlyPlayedTracks();
    recentlyPlayedTracks.href = data.href;
    recentlyPlayedTracks.limit = data.limit;
    recentlyPlayedTracks.next = data.next;
    recentlyPlayedTracks.cursors = data.cursors;
    recentlyPlayedTracks.total = data.total;
    recentlyPlayedTracks.items = data.items;
    recentlyPlayedTracks.items = data.items.map((item: any) => PlayHistory.fromJSON(item));
    return recentlyPlayedTracks;
  }
}