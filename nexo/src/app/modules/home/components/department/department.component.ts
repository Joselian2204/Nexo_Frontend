import { Component, OnInit } from '@angular/core';
import { LocationService} from '../../../services/location.service'
import { Location } from '../../../models/location';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { Data } from '../../../models/data';
import { DataService} from '../../../services/data.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

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

  municipalities: Location[]=[];
  
  times: any[] = ["Ultimo Mes","Ultimo Trimestre","Ultimo Semestre","Ultimo Año","Inicio"];

  departments: Location[]=[];

  depdata: Data[]=[];

  title = "Bolivia";

  constructor(private locationService: LocationService, private dataService: DataService, private modalMun: NgbModal, private modalTimes: NgbModal) {
  }

  ngOnInit(): void {
    this.locationService.getLocation("bol").subscribe( dep => this.departments = dep);
    this.fetchData('country/','BOL');
  }

  fetchData(path:string,id: string): void{
    console.log("adawda");
    console.log(id);
    this.dataService.getData(path+id).subscribe(ddata => {
      this.depdata = ddata;
      this.ChartLabels = ddata.map((p: { date: any; }) => p.date.substring(0,10))
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

  setTitle(name: string): void{
    this.title = name;
    console.log(this.title);
  }

  setMunicipalities(id: string): void {
    this.locationService.getLocation("municipios/"+id).subscribe(mun => this.municipalities = mun);
  }

  downloadData(): void{
    
  }

  selectedGroup: any;

  getVal() {
    console.log(this.selectedGroup); // returns selected object
    console.log(this.selectedGroup.id); // returns selected option's id
    console.log(this.selectedGroup.name); // returns selected option's name
  }

  selectChangeHandler (event: any) {
    console.log(event.target.value);
    this.fetchData('municipios/',event.target.value);
  }

  setBoliviaGraph(): void {
    this.fetchData('country/','BOL');
  }

  openMun(contenido: any): void{
    this.modalMun.open(contenido);
  }

  openTimes(contenido: any): void{
    this.modalTimes.open(contenido);
  }
}
