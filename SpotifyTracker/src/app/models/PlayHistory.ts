import { TableRow, Track, TrackContext } from './index';

export class PlayHistory {
  track: Track = new Track();
  played_at: string = '';
  context?: TrackContext = new TrackContext();

  public static GetColumnNames(): string[] {
    return ['', 'Track', 'Played At'];
  }

  public static FromJSON(data: any): PlayHistory {
    const playHistory = new PlayHistory();
    playHistory.track = Track.fromJSON(data.track);
    playHistory.played_at = data.played_at;
    playHistory.context = data.context;
    return playHistory;
  }

  public getTableRow(): TableRow {
    return {
      data: [
        {
          element: 'img',
          src: this.track.album.images[0].url,
        },
        {
          element: 'p',
          text: this.track.name,
        },
        {
          element: 'p',
          text: new Date(this.played_at).toDateString(),
        },
      ],
      href: `/track/${this.track.id}`,
    };
  }
}
