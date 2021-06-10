import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { Data } from 'src/app/modules/models/data';
import { Prediction } from 'src/app/modules/models/prediction';
import { DataService } from 'src/app/modules/services/data.service';
import { LocationService } from 'src/app/modules/services/location.service';
import { PredictionService } from 'src/app/modules/services/prediction.service';
import { BetasDialogComponent } from '../dialogs/betas-dialog/betas-dialog.component';
import { CustomfiltersComponent } from '../dialogs/customfilters/customfilters.component';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {

    //------------------------Chart Variables-----------------------//

    public firstChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    
    public firstChartLables = [];
    public firstChartType: ChartType = 'line';
    public firstChartLegend = true;
    
    public firstChartData = [
      {data: [], label: ''}
    ];
//------------------------------------//
    public secondChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    
    public secondChartLables = [];
    public secondChartType: ChartType = 'line';
    public secondChartLegend = true;
    
    public secondChartData = [
      {data: [], label: ''}
    ];

  //------------------------------------//
  public thirdChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public thirdChartLables = [];
  public thirdChartType: ChartType = 'line';
  public thirdChartLegend = true;
  
  public thirdChartData = [
    {data: [], label: ''}
  ];

//------------------------------------//
public fourthChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};

public fourthChartLables = [];
public fourthChartType: ChartType = 'line';
public fourthChartLegend = true;

public fourthChartData = [
  {data: [], label: ''}
];

  
    //------------------------Chart Colors-----------------------//
    
    public firstChartColors: Color[] = [
      { //infected
        backgroundColor: 'rgba(155,89,182,0.6)',
        borderColor: 'rgba(155,89,182,1)',
        pointBackgroundColor: 'rgba(155,89,182,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(155,89,182,0.8)'
      }
    ];

    public secondChartColors: Color[] = [
      { //death
        backgroundColor: 'rgba(69,92,115,0.6)',
        borderColor: 'rgba(69,92,115,1)',
        pointBackgroundColor: 'rgba(69,92,115,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(69,92,115,0.8)'
      }
    ];

    public thirdChartColors: Color[] = [
      { //vaccine
        backgroundColor: 'rgba(52,152,219,0.6)',
        borderColor: 'rgba(52,152,219,1)',
        pointBackgroundColor: 'rgba(52,152,219,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(52,152,219,0.8)'
      }
    ];

    public fourthChartColors: Color[] = [
      {//recovered
        backgroundColor: 'rgba(38, 185, 154,0.6)',
        borderColor: 'rgba(38, 185, 154,1)',
        pointBackgroundColor: 'rgba(38, 185, 154,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(38, 185, 154,0.8)'
      }
    ];

  constructor(private locationService: LocationService, public dialog: MatDialog,private dataService: DataService, private predictionService: PredictionService) { }

  ngOnInit(): void {
  }

  selectPred1 = "";
  selectVar1 = "";

  selectPred2 = "";
  selectVar2 = "";

  selectPred3 = "";
  selectVar3 = "";

  selectPred4 = "";
  selectVar4 = "";

  types: any[] =[{name: 'AR1', value: 'ar1/'},{name:'Lineal', value: 'mtx/'},{name:'AR2', value: 'ar2/'},{name:'Arima', value: 'arima/'},{name:'Gray', value: 'gray/'}];

  variables: any[] = [{type: 'Infectados', value: 0},{type: 'Decesos', value: 1},{type: 'Recuperados', value: 2}]

  label1=''
  label2=''
  label3=''
  label4=''

  setLables(chart: number, lbl: string){
    if(chart == 1){
      this.label1 = lbl;
      this.firstChartData = [
        {data: [],label: lbl}
      ];
    }else{
      if(chart == 2){
        this.label2 = lbl;
        this.secondChartData = [
          {data: [],label: lbl}
        ];
      }else{
        if(chart == 3){
          this.label3 = lbl;
          this.thirdChartData = [
            {data: [],label: lbl}
          ];
        }else{
          if(chart == 4){
            this.label4 = lbl;
            this.fourthChartData = [
              {data: [],label: lbl}
            ];
          }
        }
      }
    }
  }

  myNewData1: Prediction [] =[]
  myNewData2: Prediction [] =[]
  myNewData3: Prediction [] =[]
  myNewData4: Prediction [] =[]

  fetchData(type:string,pfr:string,pfl:string,cant:number,filter:any,chart: number): void{
    const ppth = type.concat(pfr)
    const spth = ppth.concat(pfl)
    if(chart == 1){
      this.predictionService.getPrediction(spth,cant,filter).subscribe(data =>{
        this.myNewData1 = data;
        this.setData(this.myNewData1,1);
      });
    }else{
      if(chart == 2){
        this.predictionService.getPrediction(spth,cant,filter).subscribe(data =>{
          this.myNewData2 = data;
          this.setData(this.myNewData2,2);
        });
      }else{
        if (chart == 3) {
          this.predictionService.getPrediction(spth,cant,filter).subscribe(data =>{
            this.myNewData3 = data;
            this.setData(this.myNewData3,3);
          });
        }else{
          if (chart == 4) {
            this.predictionService.getPrediction(spth,cant,filter).subscribe(data =>{
              this.myNewData4 = data;
              this.setData(this.myNewData4,4);
            });
          }
        }
      }
    } 
  }

  setData(mydata: any, chart: number){
    if(chart == 1){
      this.firstChartLables = mydata.map((p: {date : any}) => p.date.substring(0,10))
      this.firstChartData = [
        {data: mydata.map((p: {cases : any; }) => p.cases),label:this.label1}
      ];
    }else{
      if(chart == 2){
        this.secondChartLables = mydata.map((p: {date : any}) => p.date.substring(0,10))
        this.secondChartData = [
        {data: mydata.map((p: {cases : any; }) => p.cases),label:this.label2}
      ];
      }else{
        if (chart == 3) {
          this.thirdChartLables = mydata.map((p: {date : any}) => p.date.substring(0,10))
          this.thirdChartData = [
          {data: mydata.map((p: {cases : any; }) => p.cases),label:this.label3}
        ];
        }else{
          if (chart == 4) {
            this.fourthChartLables = mydata.map((p: {date : any}) => p.date.substring(0,10))
            this.fourthChartData = [
            {data: mydata.map((p: {cases : any; }) => p.cases),label:this.label4}
          ];
          }
        }
      }
    } 
  }

//--------------------------Dialog---------------------------------//

  pathForLocation1 = ''
  pathForLocation2 = ''
  pathForLocation3 = ''
  pathForLocation4 = ''
  actualButtonName1 = 'Ubicación'
  actualButtonName2 = 'Ubicación'
  actualButtonName3 = 'Ubicación'
  actualButtonName4 = 'Ubicación'
  pathForRoute1 = ''
  pathForRoute2 = ''
  pathForRoute3 = ''
  pathForRoute4 = ''

  openLocationDialog1(){
    const dialogRef = this.dialog.open(CustomfiltersComponent,{
      width:"323px",
      data: {path: this.pathForLocation1}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pathForLocation1 = result.path;
      this.actualButtonName1 = result.name;
      this.pathForRoute1 = result.location;
      this.saveName(this.actualButtonName1)
    });
  }
  openLocationDialog2(){
    const dialogRef = this.dialog.open(CustomfiltersComponent,{
      width:"323px",
      data: {path: this.pathForLocation2}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pathForLocation2 = result.path;
      this.actualButtonName2 = result.name;
      this.pathForRoute2 = result.location;
      this.saveName(this.actualButtonName2)
    });
  }
  openLocationDialog3(){
    const dialogRef = this.dialog.open(CustomfiltersComponent,{
      width:"323px",
      data: {path: this.pathForLocation3}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pathForLocation3 = result.path;
      this.actualButtonName3 = result.name;
      this.pathForRoute3 = result.location;
      this.saveName(this.actualButtonName3)
    });
  }
  openLocationDialog4(){
    const dialogRef = this.dialog.open(CustomfiltersComponent,{
      width:"323px",
      data: {path: this.pathForLocation4}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pathForLocation4 = result.path;
      this.actualButtonName4 = result.name;
      this.pathForRoute4 = result.location;
      this.saveName(this.actualButtonName4)
    });
  }

  viewVariables(chart: number,ptr: string, ptl: string, variable: any){

    console.log(ptr)
    console.log(ptl)
    const lineal = 'lineal/';
    let initPath = lineal.concat(ptr);
    let finalPath = initPath.concat(ptl)

    console.log(finalPath)

    if(chart == 1){
      const dialogRef = this.dialog.open(BetasDialogComponent,{
        width:"250px",
        data: {
          pth: finalPath,
          var: variable
        }
      });
    }else if(chart == 2){
      const dialogRef = this.dialog.open(BetasDialogComponent,{
        width:"250px",
        data: {id: this.pathForLocation2}
      });
    }else if(chart == 3){
      const dialogRef = this.dialog.open(BetasDialogComponent,{
        width:"250px",
        data: {id: this.pathForLocation3}
      });
    }
    else if(chart == 4){
      const dialogRef = this.dialog.open(BetasDialogComponent,{
        width:"250px",
        data: {id: this.pathForLocation4}
      });
    }
  }
//-------------------------Download-------------------------------//

  nameCsv = 'null'

  saveName(name: string){
    this.nameCsv = name;
  }

  downloadData(mydata: any, name: any): void{
    const csvRows = [];
    const headers = Object.keys(mydata[0]);
    //const dat = JSON.parse(this.depdata);
    csvRows.push(headers.join(','));
    for (const row of mydata){
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
    a.setAttribute('download', name.concat('.csv'));
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

//---------------------Adder-----------------------//

  adderValue1 = 100;
  adderValue2 = 100;
  adderValue3 = 100;
  adderValue4 = 100;

  setAdderValue(value: string, adder: number){
    if(adder == 1){
      if (value == "less") {
        this.adderValue1 = this.adderValue1-1;
      }
      else{
        this.adderValue1 = this.adderValue1+1;
      }
    }else{
      if(adder == 2){
        if (value == "less") {
          this.adderValue2 = this.adderValue2-1;
        }
        else{
          this.adderValue2 = this.adderValue2+1;
        }
      }else{
        if(adder == 3){
          if (value == "less") {
            this.adderValue3 = this.adderValue3-1;
          }
          else{
            this.adderValue3 = this.adderValue3+1;
          }
        }
        else{
          if(adder == 4){
            if (value == "less") {
              this.adderValue4 = this.adderValue4-1;
            }
            else{
              this.adderValue4 = this.adderValue4+1;
            }
          }
        }
      }
    }
  }
}
