import {Content} from "./content.model";
import {CourseInformation} from "./courseinformation.model";

export class Course {
    id: number;
    name: string;
    description: string;
    dateStart: Date;
    dateEnd: Date;
    status: string;
    logoUrl: string;
    movieUrl: string;
    mentorsId: Array<bigint>;
    contents: Array<Content>
    coursesInformation: Array<CourseInformation>

    constructor(id: number, name: string, description: string, dateStart: Date, dateEnd: Date, status: string, logoUrl: string, movieUrl: string, mentorsId: Array<bigint>, contents: Array<Content>, coursesInformation: Array<CourseInformation>) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.status = status;
        this.logoUrl = logoUrl;
        this.movieUrl = movieUrl;
        this.mentorsId = mentorsId;
        this.contents = contents;
        this.coursesInformation = coursesInformation;
    }
}
