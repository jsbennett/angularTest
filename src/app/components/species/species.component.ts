import { Component, OnInit, Output } from '@angular/core';
import { SpeciesService } from "../../services/species.service";
import { Species } from 'src/app/models/species';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  constructor(private speciesService: SpeciesService) { }

  allSpecies: Species[];

  public barChartData = [];
  public barChartLabels = [];


  ngOnInit() {
    this.getAllSpecies();
  }

  getAllSpecies(): void {
    this.speciesService.getAllSpecies().subscribe(species => {
      let speciesList = [];
      Object.assign(speciesList, species["results"]);
      this.allSpecies = speciesList;
      let data = [];
      for (let species of this.allSpecies) {
        this.barChartLabels.push(species["name"]);
        data.push(species["average_height"]);
      }
      this.barChartData = [{
        data: data, label: 'Height Data'
      }];
    }
    );


  }

}
