import { ExternalUrls } from "./ExternalUrls";

export class TrackContext {
  type: string = "";
  href: string = "";
  external_urls: ExternalUrls = new ExternalUrls();
  uri: string = "";

  public static fromJSON(data: any): TrackContext {
    const trackContext: TrackContext = new TrackContext();
    trackContext.type = data.type;
    trackContext.href = data.href;
    trackContext.external_urls = data.external_urls;
    trackContext.uri = data.uri;
    return trackContext;
  }
}