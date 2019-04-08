import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PeopleComponent } from './components/people/people.component';
import { SpeciesComponent } from './components/species/species.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { StarshipComponent } from './components/starship/starship.component';

import { PlanetService } from './services/planet.service';

import { PlanetDetailsComponent } from './components/detail-components/planet-details/planet-details.component';
import { PersonDetailsComponent } from './components/detail-components/person-details/person-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetComponent,
    PeopleComponent,
    SpeciesComponent,
    VehicleComponent,
    StarshipComponent,
    PlanetDetailsComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
