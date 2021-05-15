import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';

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

  public barChartLablesInf = ['2006','2007','2008','2009','2010','2011','2012'];
  public barChartTypeInf: ChartType = 'line';
  public barChartLegendInf = true;

  public barChartDataInf = [
    {data: [65,59,80,81,56,55,40], label: 'Infectados'}
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

public barChartLablesDeath = ['2006','2007','2008','2009','2010','2011','2012'];
public barChartTypeDeath: ChartType = 'line';
public barChartLegendDeath = true;

public barChartDataDeath = [
  {data: [28,48,40,19,86,27,90], label: 'Decesos'}
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

public barChartLablesVac = ['2006','2007','2008','2009','2010','2011','2012'];
public barChartTypeVac: ChartType = 'line';
public barChartLegendVac = true;

public barChartDataVac = [
  {data: [43,75,26,68,15,2,35], label: 'Vacunados'}
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

public barChartLablesRec = ['2006','2007','2008','2009','2010','2011','2012'];
public barChartTypeRec: ChartType = 'line';
public barChartLegendRec = true;

public barChartDataRec = [
  {data: [16,25,87,36,42,67,32], label: 'Recuperados'}
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

public barChartLablesMult = ['2006','2007','2008','2009','2010','2011','2012'];
public barChartTypeMult: ChartType = 'line';
public barChartLegendMult = true;

public barChartDataMult = [
  {data: [65,59,80,81,56,55,40], label: 'Infectados'},
  {data: [28,48,40,19,86,27,90], label: 'Decesos'},
  {data: [43,75,26,68,15,2,35], label: 'Vacunados'},
  {data: [16,25,87,36,42,67,32], label: 'Recuperados'}
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

  selectView = true;

  selectedCon = 'con';
  selectedTime = 'ful';

  constructor() { }

  ngOnInit(): void {
  }

}
