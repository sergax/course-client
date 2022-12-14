import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../model/user.model";
import {Content} from "../model/content.model";
import {ContentInformation} from "../model/contentinformation.model";

const BACKEND_URL = environment.apiUrl + '/v1/courses';

@Injectable({
    providedIn: 'root'
})
export class ContentService {

    constructor(private http: HttpClient) {

    }

    getContentById(id: number): Observable<Content> {
        return this.http.get<any>(BACKEND_URL + '/contents/' + id);
    }

    createContent(courseId: number,
                  name: string,
                  text: string,
                  movieUrl: string,
                  mentor: User
    ) {
        return this.http.post<Content>(BACKEND_URL + "/" + courseId + "/contents", {
            courseId: courseId,
            name: name,
            text: text,
            movieUrl: movieUrl,
            mentor: mentor
        });
    }

    updateContentById(id: number,
                      name: string,
                      text: string,
                      movieUrl: string,
                      mentor: User
    ) {
        return this.http.put<Content>(BACKEND_URL + '/contents/' + id, {
            id: id,
            name: name,
            text: text,
            movieUrl: movieUrl,
            mentor: mentor
        });
    }

    passedContentByStudentId(contentId: number, student: User) {
        this.http.post<ContentInformation>(BACKEND_URL + '/contents/' + contentId, {
            student: student
        }).subscribe();
    }

    getProgressByStudent(courseId: number) {
        return this.http.get<any>(BACKEND_URL + "/" + courseId + '/progress')
    }


}