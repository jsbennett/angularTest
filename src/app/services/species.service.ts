import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Species } from '../models/species';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }
  allSpeciesUrl = 'https://swapi.co/api/species/?format=json';

  getAllSpecies(): Observable<Species[]> {
    return this.http.get<Species[]>(this.allSpeciesUrl);
  }
}
