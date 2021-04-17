import { Component, OnInit} from '@angular/core';
import { LocationService} from '../../../services/location.service';
import { Location } from '../../../models/location';
import * as L from 'leaflet';

@Component({
  selector: 'app-bolmap',
  templateUrl: './bolmap.component.html',
  styleUrls: ['./bolmap.component.scss']
})
export class BolmapComponent implements OnInit {

  centerbol = {lat:-16.290154, lng:-63.588653};
  zoom = 6.4;

  pos: Location[] = [];

  map!: L.Map;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {

    this.locationService.getLocation("bol").subscribe( con => {
      this.pos = con;
      this.pos.forEach(x => {
        let circle = L.circle([+x.lat,+x.lng], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 100000
        }).addTo(mymap);
        circle.bindPopup(x.name);
      })
    });

    let mymap = L.map('map').setView([this.centerbol.lat,this.centerbol.lng],this.zoom);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9zZWxpYW4yMjA0IiwiYSI6ImNrbmw4cXB5bzBkbmcyb3F2enA5cWg0NzgifQ.6lYfGfc_i0IBX6tap-T-Og', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);  
  }
}
