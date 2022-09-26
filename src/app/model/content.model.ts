import {Course} from "./course.model";

export class Content {
  id: number;
  name: string;
  text: string;
  movieUrl: string;
  typeContent: string;
  courseId: number;

  constructor(id: number, name: string, text: string, movieUrl: string, typeContent: string, courseId: number) {
    this.id = id;
    this.name = name;
    this.text = text;
    this.movieUrl = movieUrl;
    this.typeContent = typeContent;
    this.courseId = courseId;
  }
}
