import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthData} from "./auth-data.model";
import {BehaviorSubject, Subject} from "rxjs";
import {RegistrationData} from "./registration-data";
import {CodeConfirmationData} from "./code-confirmation-data";
import {User} from "../model/user.model";

const BACKEND_URL = environment.apiUrl + '/v1';

@Injectable()
export class AuthService {
    public isLoggedOut: boolean = true;
    private token!: string;
    private isAuthenticated: boolean = false;
    private role!: string;
    private authStatusListener = new Subject<boolean>();
    private isAdmin!: boolean;
    private _loginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient, private router: Router) {
        this.autoAuthUser();
        this.loginSubject.next(this.isAuthenticated);
    }

    public get loginSubject(): Subject<boolean> {
        return this._loginSubject;
    }

    getIsAuth() {
        return this.isAuthenticated;
    }

    getIsAdmin() {
        return this.isAdmin;
    }

    login(username: string, password: string) {
        const authData: AuthData = {email: username, password: password};
        this.http.post<{ token: string, role: string }>(
            BACKEND_URL + "/auth/login",
            authData
        ).subscribe(response => {
            const token = response.token;
            const role = response.role;
            this.token = token;
            this.role = role;
            if (token && role) {
                this.isAuthenticated = true;
                this.authStatusListener.next(true);
                this.isAdmin = role.toString().includes('ADMIN');
                this.saveAuthData(token, role);
                location.href = 'courses'
                // this.router.navigate(['courses']);
            }
            this.http.get<User>(BACKEND_URL + '/users')
                .subscribe(user => {
                    // this._loginSubject.next(true);
                    this.saveUserData(user.id);
                });
        }, error => {
            this.isLoggedOut = false
            this.authStatusListener.next(false);
        });

    }

    logout() {
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.isAdmin = false;
        AuthService.clearAuthData();
        window.location.reload();
        location.href = '';
    }

    private saveAuthData(token: string, role: string) {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('role', role);
    }

    private saveUserData(id: bigint) {
        sessionStorage.setItem("userId", id.toString());
    }

    getToken() {
        return this.token;
    }

    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }

        this.token = authInformation.token;
        this.role = authInformation.role;
        this.isAuthenticated = true;
        this.isAdmin = this.role.toString().includes('ADMIN');
        this.authStatusListener.next(true);
    }

    getAuthData() {
        const token = sessionStorage.getItem('token');
        const role = sessionStorage.getItem('role');
        if (!token) {
            return;
        }
        if (!role) {
            return;
        }
        return {
            token: token,
            role: role
        };
    }

    private static clearAuthData() {
        sessionStorage.clear();
    }

    register(firstName: string, lastName: string, email: string, password: string) {
        const registrationData: RegistrationData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        }

        return this.http.post(
            BACKEND_URL + "/auth/registration",
            registrationData
        );
    }

    confirmEmail(email: string, code: string) {
        const codeConfirmationData: CodeConfirmationData = {
            email: email,
            code: code
        }

        return this.http.post(
            BACKEND_URL + "/auth/confirmation",
            codeConfirmationData
        )
    }

}
