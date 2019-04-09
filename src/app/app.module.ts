import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { SpeciesService } from './services/species.service';
import { PeopleService } from './services/people.service';

import { PlanetDetailsComponent } from './components/detail-components/planet-details/planet-details.component';
import { PersonDetailsComponent } from './components/detail-components/person-details/person-details.component';
import { PlanetFormComponent } from './components/planet-form/planet-form.component';
import { ChartsModule } from 'ng2-charts';
import { ComparisonChartComponent } from './components/comparison-chart/comparison-chart.component';

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
    PersonDetailsComponent,
    PlanetFormComponent,
    ComparisonChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, ChartsModule
  ],
  providers: [PlanetService, PeopleService, SpeciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
