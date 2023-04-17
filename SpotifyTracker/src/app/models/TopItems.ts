import { Artist } from "./Artist";
import { Track } from "./Track";

export class TopItems<T> {
  href: string = "";
  limit: number = 0;
  next?: string;
  offset: number = 0;
  previous?: string;
  total: number = 0;
  items: T[] = [];
}