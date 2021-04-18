import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { LocationService } from 'src/app/modules/services/location.service';
import { Location } from '../../../models/location';
import { Data } from '../../../models/data';
import { DataService} from '../../../services/data.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

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

  times: any[] = ["Ultimo Mes","Ultimo Trimestre","Ultimo Semestre","Ultimo Año","Inicio"];

  countries: Location[] = [];

  condata: Data[]=[];

  title = "Mundo";

  constructor(private locationService: LocationService, private dataService: DataService, private modalTimes: NgbModal) { 

  }

  ngOnInit(): void {
    this.locationService.getLocation("world").subscribe( con => this.countries = con);
  }
  
  fetchData(id: string): void{
    console.log(id);
    this.dataService.getData("country/"+id).subscribe(ddata => {
      this.condata = ddata;
      this.setData(ddata);
      //console.log(ddata);
    });
  }

  setGraph(value: ChartType): void{
    this.ChartType = value;
  }

  setTitle(name: string): void{
    this.title = name;
    console.log(this.title);
  }

  downloadData(): void{
    const csvRows = [];
    const headers = Object.keys(this.condata[0]);
    //const dat = JSON.parse(this.depdata);
    csvRows.push(headers.join(','));
    for (const row of this.condata){
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
    a.setAttribute('download', 'datos.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  openTimes(contenido: any): void{
    this.modalTimes.open(contenido);
  }
  setData(ddata:any){
    this.ChartLabels = ddata.map((p: { date: any; }) => p.date.substring(0,10))
    this.ChartData = [
      {data: ddata.map((p: { newCases: any; }) => p.newCases), label:'Nuevos Casos'},
      {data: ddata.map((p: { deaths: any; }) => p.deaths), label:'Decesos'},
      {data: ddata.map((p: { vaccine: any; }) => p.vaccine), label:'Vacunados'},
      {data: ddata.map((p: { recovered: any; }) => p.recovered), label:'Recuperados'}
    ];
  }
  updateDate(time: string){
    let ddata;
    if (time == this.times[0]){
      ddata = this.condata.slice(-30);
    }else if  (time ==  this.times[1]){
      ddata = this.condata.slice(-90);
    }else if  (time ==  this.times[2]){
      ddata = this.condata.slice(-180);
    }else if  (time ==  this.times[3]){
      ddata = this.condata.slice(-365);
    }else{
      ddata = this.condata;
    }
    this.setData(ddata);
  }
}
