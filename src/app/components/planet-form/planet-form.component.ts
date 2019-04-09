import { Component, OnInit } from '@angular/core';
import { Planets } from '../../models/planets';
@Component({
  selector: 'app-planet-form',
  templateUrl: './planet-form.component.html',
  styleUrls: ['./planet-form.component.css']
})
export class PlanetFormComponent implements OnInit {

  constructor() { }
  locations = ["Near Earth", "Right next to Earth", "Just above Mars", "No where near Earth YALDI", "Wouldnt you wanna know ;)"];
  model = "";
  submitted = false;
  onSubmit() {
    this.submitted = false;
  }
  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
