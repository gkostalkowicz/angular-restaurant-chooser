import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RestaurantRowComponent } from './restaurant-row/restaurant-row.component';
import { OverviewScreenComponent } from './overview-screen/overview-screen.component';
import { VotingScreenComponent } from './voting-screen/voting-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantRowComponent,
    OverviewScreenComponent,
    VotingScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
