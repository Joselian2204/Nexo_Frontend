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

@Component({
  selector: 'app-custom-dashboard',
  templateUrl: './custom-dashboard.component.html',
  styleUrls: ['./custom-dashboard.component.scss']
})
export class CustomDashboardComponent implements OnInit {

  //------------------------Bar Chart Variables-----------------------//

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartLables = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  
  public barChartData = [
    {data: [], label: 'Infectados'},
    {data: [], label: 'Decesos'},
    {data: [], label: 'Vacunados'},
    {data: [], label: 'Recuperados'}
  ];

  //------------------------Line Chart Variables-----------------------//

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public lineChartLables = [];
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
  
  public lineChartData = [
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

  date1!: any;
  date2!: any;

  actualPath = ''
  actualId = ''

  constructor(private datePipe : DatePipe,private fb: FormBuilder,private locationService: LocationService, public dialog: MatDialog,) {
    const date = new Date()
    const month = date.getMonth()
    const day = date.getDate()
    const year = date.getFullYear()

    this.dateRange = new FormGroup({
      initDate: new FormControl(new Date(2020,3,11)),
      endDate: new FormControl(new Date(2021,3,24))
    });
  }

  ngOnInit(): void {
    this.loadMap(13,5,2);
  }


  setDate(path: string, id: string){
    const iDate = this.dateRange.get('initDate')?.value
    const eDate = this.dateRange.get('endDate')?.value

    this.date1 = this.datePipe.transform(iDate,'yyyy-MM-dd');
    this.date2 = this.datePipe.transform(eDate,'yyyy-MM-dd');
    //console.log(this.date1)
  }

//----------------------Map Functions---------------------------//

  centerMap = {lat:-16.290154, lng:-63.588653};

  zoom = 6.4;

  pos: Location[] = [];

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
//--------------------------Dialog---------------------------------//

  pathForLocation = ''

  openLocationDialog(){
    const dialogRef = this.dialog.open(CustomfiltersComponent,{
      width:"600px",
      data: {path: this.pathForLocation}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pathForLocation = result;
    });
  }
}
