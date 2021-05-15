import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { DataService } from 'src/app/modules/services/data.service';
import { LocationService } from 'src/app/modules/services/location.service';
import { Location } from '../../../../models/location';
import { Data } from '../../../../models/data';

@Component({
  selector: 'app-boliviadashboard',
  templateUrl: './boliviadashboard.component.html',
  styleUrls: ['./boliviadashboard.component.scss']
})
export class BoliviadashboardComponent implements OnInit {

//--------------------------- Infected Chart---------------------------//

  public barChartOptionsInf = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartTypeInf: ChartType = 'line';
  public barChartLegendInf = true;

  public barChartDataInf = [
    {data: [], label: 'Casos Nuevos'}
  ];

  public barChartColorsInf: Color[] = [
    { 
      backgroundColor: 'rgba(155,89,182,0.6)',
      borderColor: 'rgba(155,89,182,1)',
      pointBackgroundColor: 'rgba(155,89,182,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(155,89,182,0.8)'
    }
  ];

//--------------------------- Death Chart---------------------------//

public barChartOptionsDeath = {
  scaleShowVerticalLines: false,
  responsive: true
};

public barChartTypeDeath: ChartType = 'line';
public barChartLegendDeath = true;

public barChartDataDeath = [
  {data: [], label: 'Decesos'}
];

public barChartColorsDeath: Color[] = [
  { 
    backgroundColor: 'rgba(69,92,115,0.6)',
    borderColor: 'rgba(69,92,115,1)',
    pointBackgroundColor: 'rgba(69,92,115,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(69,92,115,0.8)'
  }
];

//--------------------------- Vaccine Chart---------------------------//

public barChartOptionsVac = {
  scaleShowVerticalLines: false,
  responsive: true
};

public barChartTypeVac: ChartType = 'line';
public barChartLegendVac = true;

public barChartDataVac = [
  {data: [], label: 'Vacunados'}
];

public barChartColorsVac: Color[] = [
  { 
    backgroundColor: 'rgba(52,152,219,0.6)',
    borderColor: 'rgba(52,152,219,1)',
    pointBackgroundColor: 'rgba(52,152,219,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(52,152,219,0.8)'
  }
];

//--------------------------- Recovered Chart---------------------------//

public barChartOptionsRec = {
  scaleShowVerticalLines: false,
  responsive: true
};

public barChartTypeRec: ChartType = 'line';
public barChartLegendRec = true;

public barChartDataRec = [
  {data: [], label: 'Recuperados'}
];

public barChartColorsRec: Color[] = [
  {
    backgroundColor: 'rgba(38, 185, 154,0.6)',
    borderColor: 'rgba(38, 185, 154,1)',
    pointBackgroundColor: 'rgba(38, 185, 154,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(38, 185, 154,0.8)'
  }
];

//--------------------------- Complete Chart---------------------------//

public barChartOptionsMult = {
  scaleShowVerticalLines: false,
  responsive: true
};

public barChartLables = [];
public barChartTypeMult: ChartType = 'line';
public barChartLegendMult = true;

public barChartDataMult = [
  {data: [], label: 'Infectados'},
  {data: [], label: 'Decesos'},
  {data: [], label: 'Vacunados'},
  {data: [], label: 'Recuperados'}
];

public barChartColorsMult: Color[] = [
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

  nameCsv = 'bolivia';

  departments: Location[]=[];
  municipalities: Location[]=[];

  selectView = true;


  selectedDep = 'bol';
  selectedMun = 'none';
  selectedTime = 'ful';

  depdata: any;

  constructor(private locationService: LocationService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.locationService.getLocation("bol").subscribe( dep => this.departments = dep);
    this.fetchData('country/','BOL');
  }

  fetchData(path:string,id: string): void{
    console.log(id);
    this.dataService.getData(path+id).subscribe(ddata => {
      this.depdata = ddata;
      this.setData(ddata);
     // console.log(ddata);
    });
  }

  setData(ddata:any){
    this.barChartLables = ddata.map((p: { date: any; }) => p.date.substring(0,10))
    this.barChartDataMult = [
      {data: ddata.map((p: { newCases: any; }) => p.newCases), label:'Casos nuevos'},
      {data: ddata.map((p: { deaths: any; }) => p.deaths), label:'Decesos'},
      {data: ddata.map((p: { vaccine: any; }) => p.vaccine), label:'Vacunados'},
      {data: ddata.map((p: { recovered: any; }) => p.recovered), label:'Recuperados'}
    ];
    this.barChartDataInf = [
      {data: ddata.map((p: {newCases: any}) => p.newCases), label:'Casos Nuevos'}
    ];
    this.barChartDataDeath = [
      {data: ddata.map((p: {deaths: any}) => p.deaths), label:'Decesos'}
    ];
    this.barChartDataVac = [
      {data: ddata.map((p: {vaccine: any}) => p.vaccine), label:'Vacunados'}
    ];
    this.barChartDataRec = [
      {data: ddata.map((p: {recovered: any}) => p.recovered), label:'Recuperadoss'}
    ];
  }

  setMunicipalities(id: string): void {
    if (id == 'none'){
      this.municipalities = [];
    }
    else{
      this.locationService.getLocation("municipios/"+id).subscribe(mun => this.municipalities = mun);
    }
  }

  saveName(name: string){
    this.nameCsv = name;
  }

  downloadData(): void{
    const csvRows = [];
    const headers = Object.keys(this.depdata[0]);
    //const dat = JSON.parse(this.depdata);
    csvRows.push(headers.join(','));
    for (const row of this.depdata){
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
