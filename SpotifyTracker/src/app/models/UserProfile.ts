import { ExternalUrls, Followers } from './index';
import { Image } from './Image';

export interface UserProfile {
  country: string;
  display_name: string;
  email: string;
  explicit_content: { filter_enabled: boolean; filter_locked: boolean };
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
  external_urls: ExternalUrls;
  // added properties
  photo_url: string;
}
