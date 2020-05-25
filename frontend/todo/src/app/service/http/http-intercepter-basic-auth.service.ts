import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let username = 'rverma510';
    let password = 'dummy';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    req = req.clone({
      setHeaders : {
        Authorization: basicAuthHeaderString
      }
    });
    return next.handle(req);
  }
}
