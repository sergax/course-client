export class Content {
  id: bigint;
  name: string;
  text: string;
  movieUrl: string;
  type: string;

  constructor(id: bigint, name: string, text: string, movieUrl: string, type: string) {
    this.id = id;
    this.name = name;
    this.text = text;
    this.movieUrl = movieUrl;
    this.type = type;
  }
}
