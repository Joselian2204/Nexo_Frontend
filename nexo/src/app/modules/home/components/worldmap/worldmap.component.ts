import { getLocaleDateFormat } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocationService} from '../../../services/location.service';
import { Location } from '../../../models/location';
import * as L from 'leaflet';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.scss']
})
export class WorldmapComponent implements OnInit {

  @ViewChild('idsvg', {static:true}) idsvg!: ElementRef;

  pos: Location[] = [];

  map!: L.Map;

  centerworld = {lat: 13, lng: 5};
  zoom = 2.5;
  val:any;

  constructor(private locationService: LocationService) {
  }

  ngOnInit(): void {

    this.locationService.getLocation("world").subscribe( con => {
      this.pos = con;
      this.pos.forEach(x => {
        let circle = L.circle([+x.lat,+x.lng], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 100000
        }).addTo(mymap);
        circle.bindPopup("<center>"+x.name+"</center>"+"</br> Población: "+this.validator(x.population)+"</br> Infectados: "+this.validator(x.cases)+"</br> Decesos: "+this.validator(x.deaths));
      })
    });

    let mymap = L.map('map').setView([this.centerworld.lat,this.centerworld.lng],this.zoom);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9zZWxpYW4yMjA0IiwiYSI6ImNrbmw4cXB5bzBkbmcyb3F2enA5cWg0NzgifQ.6lYfGfc_i0IBX6tap-T-Og', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);  
  }

  validator(parameter: any): string{
    if (parameter==0){
      return "No disponible";
    }
    else{
      return parameter;
    }
  }

}
