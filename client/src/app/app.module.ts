import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantRowComponent } from './restaurant-row/restaurant-row.component';
import { OverviewScreenComponent } from './overview-screen/overview-screen.component';
import { VotingScreenComponent } from './voting-screen/voting-screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewScreenComponent },
  { path: 'vote', component: VotingScreenComponent }
]

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
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
