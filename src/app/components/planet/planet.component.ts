import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from 'src/app/models/planet';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  constructor(private planetService: PlanetService) { }

  planets: Planet[];

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets(): void {
    this.planetService.getPlanets().subscribe(planets => {
      let planetList = [];
      Object.assign(planetList, planets["results"]);
      this.planets = planetList;
    });
  }

  onPlanetSelection(planet: Planet): void {
    let thirdLast = planet.url.charAt(30);
    if (thirdLast === '/') {
      var planetId = planet.url.substr(planet.url.length - 2);
    }
    else {
      var planetId = planet.url.charAt(30) + planet.url.substr(planet.url.length - 2);
    }

    this.planetService.changeToPlanetDetails(planetId);
  }

}
