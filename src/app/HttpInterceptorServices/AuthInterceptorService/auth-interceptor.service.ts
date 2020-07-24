import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AbstractAuthService} from '../../Services/AuthService/AbstractAuthService';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private abstractAuthService: AbstractAuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.abstractAuthService.getToken() != null) {
      const requestModifier: any = {
        headers: new HttpHeaders({
          Authorization: this.abstractAuthService.getToken()
        })
      };
      req = req.clone(requestModifier);
    }
    return next.handle(req);
  }
}
