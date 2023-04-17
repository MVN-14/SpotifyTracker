import { Track, TrackContext } from "./index";

export class PlayHistory {
  track: Track = new Track();
  played_at: string = "";
  context?: TrackContext;

  public static fromJSON(data: any): PlayHistory {
    const playHistory: PlayHistory = new PlayHistory();
    playHistory.track = Track.fromJSON(data.track);
    playHistory.played_at = data.played_at;
    playHistory.context = data.context;
    return playHistory;
  } 
}