import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {
    // const username = 'user';
    // const password = 'user';
    // const basicHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    // req = req.clone({setHeaders: {Authorization: basicHeaderString}});

    const token = localStorage.getItem('jwt');
    console.log(token);
    if (token) {
      req = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    });
      console.log(req);

    }
    return next.handle(req);
  }
}
