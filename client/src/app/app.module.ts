import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RestaurantRowComponent } from './restaurant-row/restaurant-row.component';
import { OverviewScreenComponent } from './overview-screen/overview-screen.component';
import { VotingScreenComponent } from './voting-screen/voting-screen.component';
import { ManageRestaurantsScreenComponent } from './manage-restaurants-screen/manage-restaurants-screen.component';
import { ManageRestaurantsOverviewScreenComponent } from './manage-restaurants-overview-screen/manage-restaurants-overview-screen.component';
import { ManageRestaurantsCreateScreenComponent } from './manage-restaurants-create-screen/manage-restaurants-create-screen.component';

import { RestService } from './rest.service';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewScreenComponent },
  { path: 'vote', component: VotingScreenComponent },
  { path: 'admin', component: ManageRestaurantsScreenComponent, children: [
    { path: '', component: ManageRestaurantsOverviewScreenComponent },
    { path: 'create', component: ManageRestaurantsCreateScreenComponent }
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    RestaurantRowComponent,
    OverviewScreenComponent,
    VotingScreenComponent,
    ManageRestaurantsScreenComponent,
    ManageRestaurantsOverviewScreenComponent,
    ManageRestaurantsCreateScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
