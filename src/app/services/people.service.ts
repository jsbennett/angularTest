import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }
  peopleUrl: string = "https://swapi.co/api/people/?format=json";

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl);
  }

  getPerson(url: string): Observable<Person> {
    let decodeUrl = atob(url) + "?format=json";
    return this.http.get<Person>(decodeUrl);
  }
}
