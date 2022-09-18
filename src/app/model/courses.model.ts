export class Course {
  id: bigint;
  name: string;
  description: string;
  dateStart: Date;
  dateEnd: Date;
  Status: string;
  logoUrl: string;
  movieUrl: string;

  constructor(id: bigint,
              name: string,
              description: string,
              dateStart: Date,
              dateEnd: Date,
              Status: string,
              logoUrl: string,
              movieUrl: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.Status = Status;
    this.logoUrl = logoUrl;
    this.movieUrl = movieUrl;
  }
}
