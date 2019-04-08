import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PeopleComponent } from './components/people/people.component';
import { SpeciesComponent } from './components/species/species.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { StarshipComponent } from './components/starship/starship.component';
import { PlanetDetailsComponent } from './components/detail-components/planet-details/planet-details.component';
import { PersonDetailsComponent } from './components/detail-components/person-details/person-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Planets',
    component: PlanetComponent
  },
  {
    path: 'Planets/detail/:id',
    component: PlanetDetailsComponent
  },
  {
    path: 'People',
    component: PeopleComponent
  },
  {
    path: 'People/detail/:id',
    component: PersonDetailsComponent
  },
  {
    path: 'Species',
    component: SpeciesComponent
  },
  {
    path: 'Starships',
    component: StarshipComponent
  },
  {
    path: 'Vehicles',
    component: VehicleComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
