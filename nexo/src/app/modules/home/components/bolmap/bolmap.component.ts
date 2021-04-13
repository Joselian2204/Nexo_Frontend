import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bolmap',
  templateUrl: './bolmap.component.html',
  styleUrls: ['./bolmap.component.scss']
})
export class BolmapComponent implements OnInit {

  centerbol = {lat:-16.290154, lng:-63.588653};
  zoom = 6.4;
  display?: google.maps.LatLngLiteral;

  constructor() { }

  ngOnInit(): void {
  }

}
