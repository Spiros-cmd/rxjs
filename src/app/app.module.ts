import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IntroComponent } from 'src/components/intro/intro.component';
import { SongsService } from 'src/services/songs.service';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SimpleHttpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
