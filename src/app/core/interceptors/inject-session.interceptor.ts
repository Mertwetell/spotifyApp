import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor{
  
  constructor(private cookieService: CookieService){}
  
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    try {
      const token=this.cookieService.get('token')
      let newRequets=req;
      newRequets=req.clone(
        {
          setHeaders:{ authorization:`Bearer ${token}` }
        }
      );

      return next.handle(newRequets);
    } catch (error) {
      console.log("ojo error");
      return next.handle(req);
    
    }
 
  }


}

/*export const InjectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};*/
