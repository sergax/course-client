
export class Content {
  id: bigint;
  name: string;
  text: string;
  movieUrl: string;
  typeContent: string;

  constructor(id: bigint, name: string, text: string, movieUrl: string, typeContent: string) {
    this.id = id;
    this.name = name;
    this.text = text;
    this.movieUrl = movieUrl;
    this.typeContent = typeContent;
  }
}
