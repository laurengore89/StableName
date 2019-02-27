import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorseComponent } from './horse/horse.component';
import { RiderComponent } from './rider/rider.component';

@NgModule({
  declarations: [
    AppComponent,
    HorseComponent,
    RiderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
