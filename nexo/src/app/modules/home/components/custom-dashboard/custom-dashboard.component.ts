import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { LocationService } from 'src/app/modules/services/location.service';
import * as L from 'leaflet';
import { Location } from '../../../models/location';
import { MatDialog } from '@angular/material/dialog';
import { CustomfiltersComponent } from '../dialogs/customfilters/customfilters.component';
import { Data } from '../../../models/data';
import { DataService } from 'src/app/modules/services/data.service';
import { HealthService } from 'src/app/modules/services/health.service';
import { Health } from 'src/app/modules/models/health';

@Component({
  selector: 'app-custom-dashboard',
  templateUrl: './custom-dashboard.component.html',
  styleUrls: ['./custom-dashboard.component.scss']
})
export class CustomDashboardComponent implements OnInit {

  //------------------------Chart Variables-----------------------//

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public chartLables = [];
  public chartType: ChartType = 'line';
  public chartLegend = true;
  
  public chartData = [
    {data: [], label: 'Infectados'},
    {data: [], label: 'Decesos'},
    {data: [], label: 'Vacunados'},
    {data: [], label: 'Recuperados'}
  ];

  //------------------------Chart Colors-----------------------//
  
  public chartColors: Color[] = [
    { //infected
      backgroundColor: 'rgba(155,89,182,0.6)',
      borderColor: 'rgba(155,89,182,1)',
      pointBackgroundColor: 'rgba(155,89,182,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(155,89,182,0.8)'
    },
    { //death
      backgroundColor: 'rgba(69,92,115,0.6)',
      borderColor: 'rgba(69,92,115,1)',
      pointBackgroundColor: 'rgba(69,92,115,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(69,92,115,0.8)'
    },
    { //vaccine
      backgroundColor: 'rgba(52,152,219,0.6)',
      borderColor: 'rgba(52,152,219,1)',
      pointBackgroundColor: 'rgba(52,152,219,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(52,152,219,0.8)'
    },
    {//recovered
      backgroundColor: 'rgba(38, 185, 154,0.6)',
      borderColor: 'rgba(38, 185, 154,1)',
      pointBackgroundColor: 'rgba(38, 185, 154,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(38, 185, 154,0.8)'
    }
  ];

  fontStyleControl = new FormControl();
  locationMap?: string;

  dateRange!: FormGroup;
  dateRangeTwo!: FormGroup;

  date1!: any;
  date2!: any;
  date3!: any;
  date4!: any;

  actualPath = ''
  actualId = ''

  constructor(private datePipe : DatePipe,private fb: FormBuilder,private locationService: LocationService, public dialog: MatDialog,private dataService: DataService,private healthService: HealthService) {
    const date = new Date()
    const month = date.getMonth()
    const day = date.getDate()
    const year = date.getFullYear()

    this.dateRange = new FormGroup({
      initDate: new FormControl(new Date(2020,3,11)),
      endDate: new FormControl(new Date(2021,3,24))
    });

    this.dateRangeTwo = new FormGroup({
      initDateTwo: new FormControl(new Date(2020,3,11)),
      endDateTwo: new FormControl(new Date(2021,3,24))
    });
  }

  ngOnInit(): void {
    this.loadMap(13,5,2);
  }
//----------------------Map Functions---------------------------//

  centerMap = {lat:-16.290154, lng:-63.588653};

  zoom = 6.4;

  pos: Location[] = [];

  healthBuild: Health[] = [];

  map!: L.Map;

  mymap!: L.Map;

  total: Location = {cases:0,deaths:0,population:0,id:"",lat:0,lng:0,name:"",recovered:0,vaccine:0};

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
    
    this.mymap = L.map('cmap').setView([lati,long],zoom);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9zZWxpYW4yMjA0IiwiYSI6ImNrbmw4cXB5bzBkbmcyb3F2enA5cWg0NzgifQ.6lYfGfc_i0IBX6tap-T-Og', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    }).addTo(this.mymap); 
  }

  loadMarkers(pth: string,rad: number){
    this.locationService.getLocation(pth).subscribe( con => {
      this.pos = con;
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
  
  validator(parameter: any): string{
    if (parameter == 0){
      return "No disponible";
    }
    else{
      return parameter;
    }
  }
//--------------------------Chart Functions------------------------//

cdata!: any;

setTypeChart(type: any){
  this.chartType = type;
}

fetchData(path:string, clear: boolean): void{
  if(clear){
    this.dataService.getData(path,"","").subscribe(ddata => {
      this.cdata = ddata;
      this.setData(ddata);
     // console.log(ddata);
    });
  }
  else{
    this.dataService.getData(path,this.date1,this.date2).subscribe(ddata => {
      this.cdata = ddata;
      this.setData(ddata);
     // console.log(ddata);
    });
  } //console.log(id);
}

setData(ddata:any){
  this.chartLables = ddata.map((p: { date: any; }) => p.date.substring(0,10))
  this.chartData = [
    {data: ddata.map((p: { newCases: any; }) => p.newCases), label:'Casos nuevos'},
    {data: ddata.map((p: { deaths: any; }) => p.deaths), label:'Decesos'},
    {data: ddata.map((p: { vaccine: any; }) => p.vaccine), label:'Vacunados'},
    {data: ddata.map((p: { recovered: any; }) => p.recovered), label:'Recuperados'}
  ];
}

//--------------------------Dialog---------------------------------//

  pathForLocation = ''
  actualButtonName = 'Ubicación'
  pathForRoute = ''

  openLocationDialog(){
    const dialogRef = this.dialog.open(CustomfiltersComponent,{
      width:"323px",
      data: {path: this.pathForLocation}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pathForLocation = result.path;
      this.actualButtonName = result.name;
      this.pathForRoute = result.location;
      this.fetchData(this.pathForRoute.concat(this.pathForLocation),true)
      this.saveName(this.actualButtonName)
      //console.log(this.pathForLocation)
    });
  }
//--------------------------Editor---------------------------------//
  ckeditorContent = "";
//-------------------------Dates-------------------------------//
  setDate(path: string){
  const iDate = this.dateRange.get('initDate')?.value
  const eDate = this.dateRange.get('endDate')?.value

  this.date1 = this.datePipe.transform(iDate,'yyyy-MM-dd');
  this.date2 = this.datePipe.transform(eDate,'yyyy-MM-dd');

  this.fetchData(path,false)
  //console.log(this.date1)
  }
//-------------------------Download-------------------------------//

nameCsv = 'null'

saveName(name: string){
  this.nameCsv = name;
}

downloadData(): void{
  const csvRows = [];
  const headers = Object.keys(this.cdata[0]);
  //const dat = JSON.parse(this.depdata);
  csvRows.push(headers.join(','));
  for (const row of this.cdata){
    const values = headers.map( header =>{
      let key = header as keyof Data;
      return ''+row[key]
    })
    csvRows.push(values.join(','));
  }
  const data = csvRows.join('\n');
  const blob = new Blob([data], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('hidden', '');
  a.setAttribute('href', url);
  a.setAttribute('download', this.nameCsv.concat('.csv'));
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
}

