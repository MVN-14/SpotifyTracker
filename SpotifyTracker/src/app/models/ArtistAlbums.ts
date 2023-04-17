import { Album } from "./Album";

export class ArtistAlbums {
  href: string = "";
  limit: number = 0;
  next: string = "";
  offset: number = 0;
  previous: string = "";
  total: number = 0;
  items: Album[] = [];  
}