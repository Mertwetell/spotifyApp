import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesPageComponent } from './modules/favorites/pages/favorites-page/favorites-page.component';



@NgModule({
  declarations: [//TODO: Declaraciones, componentes, directivas, pipes
    AppComponent, FavoritesPageComponent

  ],
  imports: [//TODO: Declaraciones, componentes, directivas, pipes
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
