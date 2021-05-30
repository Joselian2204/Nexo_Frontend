import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { Data } from 'src/app/modules/models/data';
import { DataService } from 'src/app/modules/services/data.service';
import { LocationService } from 'src/app/modules/services/location.service';
import { PredictionService } from 'src/app/modules/services/prediction.service';
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
  cdata!: any;


  selectPred1 = "";
  selectVar1 = "";

  selectPred2 = "";
  selectVar2 = "";

  selectPred3 = "";
  selectVar3 = "";

  selectPred4 = "";
  selectVar4 = "";

  types: any[] =[{name: 'AR1', value: 'ar1'},{name:'Lineal', value: 'mtx'}];

  variables: any[] = [{type: 'Infectados', value: '0'},{type: 'Decesos', value: '1'},{type: 'Recuperados', value: '2'}]

  setLables(chart: number, lbl: string){
    if(chart == 1){
      this.firstChartData = [
        {data: [],label: lbl}
      ];
    }else{
      if(chart == 2){
        this.secondChartData = [
          {data: [],label: lbl}
        ];
      }
    }
  }


  // fetchData(initpth: string,id:string): void{
  //   const mypth = this.pathForRoute.concat(initpth)
  //   const finalpht = mypth.concat(id)
  //   this.predictionService.getPrediction(finalpht)
  //   if(clear){
  //     this.dataService.getData(path,"","").subscribe(ddata => {
  //       this.cdata = ddata;
  //       this.setData(ddata);
  //      // console.log(ddata);
  //     });
  //   } //console.log(id);
  // }

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
      this.saveName(this.actualButtonName)
      console.log(this.pathForLocation)
    });
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

//---------------------Adder-----------------------//

  adderValue1 = 100;
  adderValue2 = 100;
  adderValue3 = 100;
  adderValue4 = 100;

  // setAdderValue(value: string, adder: number){
  //   if(adder == 1){
  //     if (value == "less") {
  //       this.adderValue1 = this.adderValue1-1;
  //     }
  //     else{
  //       this.adderValue1 = this.adderValue1+1;
  //     }
  //   }else{
  //     if(adder ==)
  //   }
    
  // }
}
