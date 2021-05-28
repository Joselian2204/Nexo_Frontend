import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyComponent implements OnInit {
 
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
