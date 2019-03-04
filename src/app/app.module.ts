import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HorseComponent } from './components/horse/horse.component';
import { RiderComponent } from './components/rider/rider.component';

@NgModule({
  declarations: [
    AppComponent,
    HorseComponent,
    RiderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
