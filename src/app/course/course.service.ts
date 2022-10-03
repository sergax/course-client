import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Course} from "../model/course.model";
import {User} from "../model/user.model";
import {CourseInformation} from "../model/courseinformation.model";

const BACKEND_URL = environment.apiUrl + '/v1/courses';
const BACKEND_URL_AUTH = environment.apiUrl + '/v1/auth';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private http: HttpClient) {
    }

    getCourses() {
        return this.http.get<Array<Course>>(BACKEND_URL + '/all');
    }

    getPublicCourses() {
        return this.http.get<Array<Course>>(BACKEND_URL_AUTH + "/public/courses");
    }

    getCourseById(id: number): Observable<Course> {
        return this.http.get<any>(BACKEND_URL + '/' + id);
    }

    createCourse(name: string,
                 description: string,
                 logoUrl: string,
                 movieUrl: string,
                 dateEnd: Date,
                 mentor: User
    ) {
        return this.http.post<Course>(BACKEND_URL, {
            name,
            description,
            logoUrl,
            movieUrl,
            dateEnd,
            mentor
        });
    }

    updateCourseById(id: number,
                     name: string,
                     description: string,
                     logoUrl: string,
                     movieUrl: string,
                     dateStart: Date,
                     dateEnd: Date,
                     status: string,
                     mentor: User
    ) {
        return this.http.put<Course>(BACKEND_URL + '/' + id, {
            id,
            name,
            description,
            logoUrl,
            movieUrl,
            dateStart,
            dateEnd,
            status,
            mentor
        });
    }

    addStudentToCourse(id: number,
                       student: User
    ) {
        return this.http.patch<CourseInformation>(BACKEND_URL + '/' + id + '/students', {
            id,
            student
        });
    }

    addLikesToCourseByStudentId(id: number,
                                likes: boolean,
                                student: User
    ) {
        return this.http.patch<CourseInformation>(BACKEND_URL + '/' + id + '/info', {
            id,
            likes,
            student
        });
    }


}
