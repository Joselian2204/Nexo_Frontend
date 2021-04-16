import { Component, OnInit } from '@angular/core';
import { LocationService} from '../../../services/location.service'
import { Location } from '../../../models/location';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {

  ChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  ChartLabels = ['2006','2007','2008','2009','2010','2011','2012'];

  ChartType: ChartType = 'line';

  ChartLegend = true;

  ChartData = [
    {data: [65,59,80,81,56,55,40], label:'Infectados'},
    {data: [35,40,70,15,32,10,25], label:'Decesos'},
    {data: [21,12,0,90,150,69,11], label:'Vacunados'},
    {data: [28,48,40,19,86,27,90], label:'Recuperados'}
  ];

  public ChartColors: Color[] = [
    { // infected
      backgroundColor: 'rgba(247,54,47,0.3)',
      borderColor: 'rgba(247,54,47,1)',
      pointBackgroundColor: 'rgba(247,54,47,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(247,54,47,0.8)'
    },
    { // death
      backgroundColor: 'rgba(53,53,53,0.3)',
      borderColor: 'rgba(53,53,53,1)',
      pointBackgroundColor: 'rgba(53,53,53,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(53,53,53,1)'
    },
    { // vaccinated
      backgroundColor: 'rgba(32,198,228,0.3)',
      borderColor: 'rgba(32,198,228,1)',
      pointBackgroundColor: 'rgba(32,198,228,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(32,198,228,0.8)'
    },
    { // recovered
      backgroundColor: 'rgba(15,209,31,0.3)',
      borderColor: 'rgba(15,209,31,1)',
      pointBackgroundColor: 'rgba(15,209,31,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(15,209,31,0.8)'
    }
  ];

  municipalities: any[] = ["mun1","mun2","mun3","mun4","mun5","mun6","mun7","mun8","mun9","mun10"];
  
  times: any[] = ["Ultimo Mes","Ultimo Trimestre","Ultimo Semestre","Ultimo Año","Inicio"];

  departments: Location[]=[/*{id:"bol1",name:"la paz",lat:50.0,lng:50.0},{id:"bol1",name:"santa cruz",lat:50.0,lng:50.0},{id:"bol1",name:"cochabamba",lat:50.0,lng:50.0},{id:"bol1",name:"tarija",lat:50.0,lng:50.0}*/];

  constructor(private locationService: LocationService) { 
  }

  ngOnInit(): void {
    this.locationService.getLocation("bol").subscribe( dep => this.departments = dep);
  }

}
