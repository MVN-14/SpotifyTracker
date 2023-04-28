import { ExternalUrls } from './ExternalUrls';

export interface TrackContext {
  type: string;
  href: string;
  external_urls: ExternalUrls;
  uri: string;
}
