import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Course} from "../model/course.model";

const BACKEND_URL = environment.apiUrl + '/v1/courses/';

@Injectable()
export class CourseService {
  // course!: Course;
  constructor(private http: HttpClient) {
  }

  getCourses() {
    return this.http.get<Array<Course>>(BACKEND_URL + 'all');
    // map(response => this.processResponse(response))
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<any>(BACKEND_URL + id);
  }

  // private processResponse(response: Response): Response {
  //   return {
  //     results: response.results.map((course: any) => <Course>{
  //       id: course.id,
  //       name: course.name,
  //       description: course.description,
  //       dateStart: course.dateStart,
  //       dateEnd: course.dateEnd,
  //       Status: course.Status,
  //       logoUrl: course.logoUrl,
  //       movieUrl: course.movieUrl,
  //       mentor: {
  //         id: course.mentor.id,
  //         name: course.mentor.name
  //       },
  //       // content: {
  //       //   id: course.content.id,
  //       //   name: course.content.name
  //       // }
  //     })
  //   };
  // }

}
