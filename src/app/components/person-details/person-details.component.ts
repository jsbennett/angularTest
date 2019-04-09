import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../../services/people.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private peopleService: PeopleService) { }

  person: Person;
  ngOnInit() {
    this.getPerson();
  }

  getPerson(): void {
    let personUrl = this.route.snapshot.paramMap.get('id');
    this.peopleService.getPerson(personUrl).subscribe(person => {
      this.person = person;
      console.log(this.person)
    }
    );
  }
}
