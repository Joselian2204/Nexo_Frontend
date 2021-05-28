import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '../../../models/location';//
import { LocationService} from '../../../services/location.service';//
import * as L from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  selected = 'dep';

  centerMap = {lat:-16.290154, lng:-63.588653};
  zoom = 6.4;

  pos: Location[] = [];//

  map!: L.Map;

  mymap!: L.Map;

  total: Location = {cases:0,deaths:0,population:0,id:"",lat:0,lng:0,name:"",recovered:0,vaccine:0};

  cardTitle = 'BOLIVIA'

  constructor(private fb: FormBuilder,private locationService: LocationService) { }

  ngOnInit(): void {

    this.loadMarkers('bol',60000);
    this.loadMap(-16.290154,-63.588653,6.4);
    this.loadCardVariable('bol_cases');

  }

  setMapParameters(lati: number, long: number, zoom: number){
    this.centerMap.lat = lati;
    this.centerMap.lng = long;
    this.zoom = zoom;
    this.loadMap(this.centerMap.lat,this.centerMap.lng,this.zoom);
  }

  loadMap(lati: number, long: number, zoom: number){
    if(this.mymap) {
      this.mymap.remove();
    }
    
    this.mymap = L.map('map').setView([lati,long],zoom);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9zZWxpYW4yMjA0IiwiYSI6ImNrbmw4cXB5bzBkbmcyb3F2enA5cWg0NzgifQ.6lYfGfc_i0IBX6tap-T-Og', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    }).addTo(this.mymap); 
  }

  validator(parameter: any): string{//
    if (parameter == 0){
      return "No disponible";
    }
    else{
      return parameter;
    }
  }

  loadMarkers(pth: string,rad: number){//
    this.locationService.getLocation(pth).subscribe( con => {
      this.pos = con;//
      this.pos.forEach(x => {
        let circle = L.circle([+x.lat,+x.lng], {
          color: '#9b59b6',
          fillColor: '#9b59b6',
          fillOpacity: 0.5,
          radius: rad
        }).addTo(this.mymap);
        circle.bindPopup("<center>"+x.name+"</center>"+"</br> Población: "+this.validator(x.population)+"</br> Infectados: "+this.validator(x.cases)+"</br> Decesos: "+this.validator(x.deaths));
      })
    });
  }

  loadCardVariable(pth: string){
    this.locationService.getLocation(pth).subscribe( tot => this.total = tot);
  }

  setCardTitle(title: string){
    this.cardTitle = title;
  }

}
