import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class PlanetService {

  constructor(private http: HttpClient, private router: Router) { }

  private planetsUrl = 'https://swapi.co/api/planets/?format=json';
  private planetUrl = 'https://swapi.co/api/planets/';

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.planetsUrl);
  }

  getPlanet(planetId: string): Observable<Planet> {
    return this.http.get<Planet>(this.planetUrl + planetId + '/?format=json');
  }

  changeToPlanetDetails(planetId: string): void {
    this.router.navigate(['Planets/detail/' + planetId]);
  }
}
