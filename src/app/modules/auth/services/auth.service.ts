import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private readonly URL= enviroment.api;


  constructor(private http:HttpClient,private cookie: CookieService) {

   }

public sendCredentials(email:string,password:string):Observable<any>{
  const body={
    email,
    password
  };
  
  return this.http.post(`${this.URL}/auth/login`,body).pipe(
    tap((responseOk:any)=>{
      const { tokenSession, data } = responseOk
      this.cookie.set('token_servicio', tokenSession, 4, '/')
    })
  );
  
  //console.log(" ok ok", email, password);

}
}
