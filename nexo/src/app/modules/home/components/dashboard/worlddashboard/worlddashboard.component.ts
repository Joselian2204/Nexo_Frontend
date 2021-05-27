import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { DataService } from 'src/app/modules/services/data.service';
import { LocationService } from 'src/app/modules/services/location.service';
import { Location } from '../../../../models/location';
import { Data } from '../../../../models/data';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-worlddashboard',
  templateUrl: './worlddashboard.component.html',
  styleUrls: ['./worlddashboard.component.scss']
})
export class WorlddashboardComponent implements OnInit {

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
  {data: [], label: 'Casos Nuevos'},
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

  nameCsv = 'Afghanistan';

  countries: Location[] = [];

  condata: Data[]=[];

  selectView = true;

  selectedCon = 'con';
  selectedTime = 'ful';

  date1!: any;
  date2!: any;

  dateRange!: FormGroup;

  actualPath = 'country/'
  actualId = 'BOL'

  constructor(private locationService: LocationService, private dataService: DataService, private datePipe : DatePipe) {
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
    this.locationService.getLocation("world").subscribe( con => this.countries = con);
    this.fetchData('country/','AFG',true)
  }

  fetchData(path:string,id: string, clear: boolean): void{

    if(clear){
      this.dataService.getData(path+id,"","").subscribe(ddata => {
        this.condata = ddata;
        this.setData(ddata);
       // console.log(ddata);
      });
    }
    else{
      this.dataService.getData(path+id,this.date1,this.date2).subscribe(ddata => {
        this.condata = ddata;
        this.setData(ddata);
       // console.log(ddata);
      });
    } //console.log(id);
  }

  setData(ddata:any){
    this.barChartLables = ddata.map((p: { date: any; }) => p.date.substring(0,10))
    this.barChartDataMult = [
      {data: ddata.map((p: { newCases: any; }) => p.newCases), label:'Casos Nuevos'},
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

  saveName(name: string){
    this.nameCsv = name;
  }

  saveDataPath(pth: string, id: string){
    this.actualPath = pth;
    this.actualId = id;
  }

  setDate(path: string, id: string){
    const iDate = this.dateRange.get('initDate')?.value
    const eDate = this.dateRange.get('endDate')?.value

    this.date1 = this.datePipe.transform(iDate,'yyyy-MM-dd');
    this.date2 = this.datePipe.transform(eDate,'yyyy-MM-dd');

    this.fetchData(path,id,false)
    //console.log(this.date1)
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
    a.setAttribute('download', this.nameCsv.concat('.csv'));
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

}
