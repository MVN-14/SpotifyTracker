import { Artist } from "./Artist";
import { Cursors } from "./Cursors";

export type ArtistsPaged = {
  href: string;
  limit: number;
  next: string;
  cursors: Cursors;
  total: number;
  items: Artist[];
}