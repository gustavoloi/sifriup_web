import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Injectable()
export class JsonWebTokenService implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authenticationService.getToken();
    if (token) {
      let tokendata = JSON.parse(token);
      req = req.clone({
        setHeaders: { Authorization: 'bearer ' + tokendata.accessToken }
      });
    }
    return next.handle(req).pipe(
      tap(
        () => { },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.authenticationService.deleteToken();
              this.router.navigate(['/login']);
            }
            if (err.status === 500) {
              return;
            }
          }
        }
      )
    );
  }
}
