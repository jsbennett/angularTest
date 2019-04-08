import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../models/person';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  people: Person[];

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.peopleService.getPeople().subscribe(people => {
      let tempPeople = [];
      let peopleList = Object.assign(tempPeople, people["results"]);
      this.people = peopleList;
      if (this.people) {
        for (let person of this.people) {
          person.url = btoa(person.url);
        };
      }
    });


  }

}
