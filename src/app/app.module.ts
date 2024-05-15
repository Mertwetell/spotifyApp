import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';




@NgModule({
  declarations: [//TODO: Declaraciones, componentes, directivas, pipes
    AppComponent
  ],
  imports: [//TODO: Declaraciones, componentes, directivas, pipes
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    CookieService, 
    {
      provide:HTTP_INTERCEPTORS, useClass: InjectSessionInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
