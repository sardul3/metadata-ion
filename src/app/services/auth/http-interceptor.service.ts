import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {

    const token = localStorage.getItem('jwt');
    if (token) {
      req = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    });

    }
    return next.handle(req);
  }
}
