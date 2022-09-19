import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BACKEND_URL = environment.apiUrl + '/v1';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {
  }

  getCourses(size: number = 6): Observable<any> {
    return this.http.get<any>(BACKEND_URL + '/courses/all' + '/?result=${size}');
  }

  getCourseById(id: number): Observable<any> {
    return this.http.get<any>(BACKEND_URL + '/courses/id');
  }

}
