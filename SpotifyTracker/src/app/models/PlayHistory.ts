import { Track, TrackContext } from './index';

export interface PlayHistory {
  track: Track;
  played_at: string;
  context: TrackContext;
}
