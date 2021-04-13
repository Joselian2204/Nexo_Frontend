import { getLocaleDateFormat } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.scss']
})
export class WorldmapComponent implements OnInit {

  @ViewChild('idsvg', {static:true}) idsvg!: ElementRef;

  

  title = "gmap";
  centerworld = {lat: 12, lng: 0};
  zoom = 3;
  display?: google.maps.LatLngLiteral;

  val:any;

  constructor() {
  }

  ngOnInit(): void {
  }

  async getData(){
    const response = await fetch('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest')
    const data = await response.json()
    return data
  }

}
