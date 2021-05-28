import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {
  
  displayedColumns: string[] = [
    "id_location",
    "name",
    "population",
    "Case",
    "Deaths",
    "Recovered",
    "Vaccine",
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
