import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { RiderlistHorseComponent } from './components/riderlist/horse/horse.component';
import { RiderlistRiderComponent } from './components/riderlist/rider/rider.component';
import { RiderlistComponent } from './components/riderlist/riderlist.component';
import { ScorelistHorseComponent } from './components/scorelist/horse/horse.component';
import { ScorelistComponent } from './components/scorelist/scorelist.component';
import { ScorelistRiderComponent } from './components/scorelist/rider/rider.component';
import { ScorelistScoretableComponent } from './components/scorelist/scoretable/scoretable.component';

@NgModule({
  declarations: [
    AppComponent,
    RiderlistHorseComponent,
    RiderlistRiderComponent,
    RiderlistComponent,
    ScorelistHorseComponent,
    ScorelistComponent,
    ScorelistRiderComponent,
    ScorelistScoretableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
 }
