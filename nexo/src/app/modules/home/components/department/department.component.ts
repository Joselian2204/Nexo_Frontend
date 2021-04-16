import { Component, OnInit } from '@angular/core';
import { LocationService} from '../../../services/location.service'
import { Location } from '../../../models/location';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { Data } from '../../../models/data';
import { DataService} from '../../../services/data.service';
import { ɵDomAdapter } from '@angular/common';
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

  ChartLabels = [];

  ChartType: ChartType = 'line';

  ChartLegend = true;

  ChartData = [
    {data: [], label:'Infectados'},
    {data: [], label:'Decesos'},
    {data: [], label:'Vacunados'},
    {data: [], label:'Recuperados'}
  ];

  public ChartColors: Color[] = [
    { // infected
      backgroundColor: 'rgba(247,54,47,0.6)',
      borderColor: 'rgba(247,54,47,1)',
      pointBackgroundColor: 'rgba(247,54,47,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(247,54,47,0.8)'
    },
    { // death
      backgroundColor: 'rgba(53,53,53,0.6)',
      borderColor: 'rgba(53,53,53,1)',
      pointBackgroundColor: 'rgba(53,53,53,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(53,53,53,1)'
    },
    { // vaccinated
      backgroundColor: 'rgba(32,198,228,0.6)',
      borderColor: 'rgba(32,198,228,1)',
      pointBackgroundColor: 'rgba(32,198,228,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(32,198,228,0.8)'
    },
    { // recovered
      backgroundColor: 'rgba(15,209,31,0.6)',
      borderColor: 'rgba(15,209,31,1)',
      pointBackgroundColor: 'rgba(15,209,31,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(15,209,31,0.8)'
    }
  ];

  municipalities: any[] = ["mun1","mun2","mun3","mun4","mun5","mun6","mun7","mun8","mun9","mun10"];
  
  times: any[] = ["Ultimo Mes","Ultimo Trimestre","Ultimo Semestre","Ultimo Año","Inicio"];

  departments: Location[]=[];

  depdata: Data[]=[];

  constructor(private locationService: LocationService, private dataService: DataService) { 
  }

  ngOnInit(): void {
    this.locationService.getLocation("bol").subscribe( dep => this.departments = dep);
  }

  fetchData(id: string): void{
    console.log(id);
    this.dataService.getData("department/"+id).subscribe(ddata => {
      this.depdata = ddata;
      this.ChartLabels = ddata.map((p: { date: any; }) => p.date)
      this.ChartData = [
        {data: ddata.map((p: { newCases: any; }) => p.newCases), label:'Nuevos Casos'},
        {data: ddata.map((p: { deaths: any; }) => p.deaths), label:'Decesos'},
        {data: ddata.map((p: { vaccine: any; }) => p.vaccine), label:'Vacunados'},
        {data: ddata.map((p: { recovered: any; }) => p.recovered), label:'Recuperados'}
      ];
      console.log(ddata);
    });
  }

  setGraph(value: ChartType): void{
    this.ChartType = value;
  }
}
