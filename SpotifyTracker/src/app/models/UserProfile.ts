import { Followers } from "./index";
import { Images } from "./Images";

export class UserProfile {
  country: string = "";
  display_name: string = "";
  email: string = "";
  explicit_content: { filter_enabled: boolean, filter_locked: boolean } = { filter_enabled: false, filter_locked: false };
  followers: Followers = new Followers();
  href: string = "";
  id: string = "";
  images: Images[] = [];
  product: string = "";
  type: string = "";
  uri: string = "";

  getFollowers(): number {
    return this.followers.total;
  }

}



