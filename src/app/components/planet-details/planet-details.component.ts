import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Planet } from '../../../models/planet';
import { PlanetService } from '../../../services/planet.service';


@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private planetService: PlanetService, ) { }

  planet: Planet;

  ngOnInit() {
    this.getPlanet();
  }

  getPlanet(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.planetService.getPlanet(id).subscribe(planet => this.planet = planet);
  }

}
