import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  token!: string;

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authToken = this.authService.getToken();

    if (!req.url.includes('login') && authToken != null) {
      this.token = 'Bearer_' + authToken;

      const authRequest = req.clone({
        headers: req.headers.set('Authorization', this.token)
      });

      return next.handle(authRequest);
    }
    return next.handle(req);
  }
}
