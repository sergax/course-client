import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";

const BACKEND_URL: string = environment.apiUrl + '/v1/users'

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser() {
    return this.http.get<User>(BACKEND_URL);
  }

}
