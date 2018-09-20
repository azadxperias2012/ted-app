import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TedRestService } from './ted-rest.service';
import { TedEventComponent } from './ted-event/ted-event.component';


@NgModule({
  declarations: [
    AppComponent,
    TedEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TedRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
