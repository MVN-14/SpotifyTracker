import { RecommendationSeed, Track } from './index';

export class Recommendation {
  seeds: RecommendationSeed[] = [];
  tracks: Track[] = [];

  public static fromJSON(data: any) {
    const recommendation: Recommendation = new Recommendation();
    recommendation.seeds = data.seeds;
    recommendation.tracks = data.tracks.map((track: any) =>
      Track.fromJSON(track)
    );
    return recommendation;
  }
}
