import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '../../../models/location';//
import { LocationService} from '../../../services/location.service';//
import * as L from 'leaflet';
import { HealthService } from 'src/app/modules/services/health.service';
import { Health } from 'src/app/modules/models/health';

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

  healthBuild: Health[] = [];

  map!: L.Map;

  mymap!: L.Map;

  total: Location = {cases:0,deaths:0,population:0,id:"",lat:0,lng:0,name:"",recovered:0,vaccine:0};

  cardTitle = 'BOLIVIA'

  constructor(private fb: FormBuilder,private locationService: LocationService,private healthService: HealthService) { }

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

  validator(parameter: any,type: string): string{//
    if (parameter == 0){
      if (type == 'popup') {
        return "No disponible";
      }
      else{
        return "------"
      }
      
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
        circle.bindPopup("<center>"+x.name+"</center>"+"</br> Población: "+this.validator(x.population,'popup')+"</br> Infectados: "+this.validator(x.cases,'popup')+"</br> Decesos: "+this.validator(x.deaths,'popup'));
      })
    });
  }

  markerPharm = L.icon({
    iconUrl: "https://images.vexels.com/media/users/3/208408/isolated/lists/48821afaaceaeec526a2112da2e7a4b9-icono-de-trazo-de-bolsa-de-farmacia.png",
    iconSize: [38,38],
    iconAnchor: [22,94],
    popupAnchor: [12,-90]
  });

  markerHosp = L.icon({
    iconUrl: "https://images.vexels.com/media/users/3/208292/isolated/lists/e901ebd21033c8e425c8b52f49e98e5f-hospital-icono-de-accidente-cerebrovascular-hospital.png",
    iconSize: [38,38],
    iconAnchor: [22,94],
    popupAnchor: [12,-90]
  });

  loadHealthMarkers(pth:string, type: string){
    this.healthService.getHealth(pth).subscribe(health =>{
      this.healthBuild = health;
      this.healthBuild.forEach(x =>{
        if (type == 'pharm') {
          let marker = L.marker([+x.lat,+x.lng],{icon:this.markerPharm}).bindPopup("<center>"+x.name+"</center>"+"</br> Departamento: "+x.idDepartment+"</br> Ubicación: "+x.location+"</br> Teléfono: "+x.phoneNumber).addTo(this.mymap);
        }
        else{
          let marker = L.marker([+x.lat,+x.lng],{icon:this.markerHosp}).bindPopup("<center>"+x.name+"</center>"+"</br> Departamento: "+x.idDepartment+"</br> Ubicación: "+x.location+"</br> Teléfono: "+x.phoneNumber).addTo(this.mymap);
        }
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
