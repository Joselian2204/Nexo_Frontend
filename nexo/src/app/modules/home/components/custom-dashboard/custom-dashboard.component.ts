import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';

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
  fontStyle?: string;

  dateRange!: FormGroup;

  date1!: any;
  date2!: any;

  actualPath = ''
  actualId = ''

  constructor(private datePipe : DatePipe) {
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
  }


  setDate(path: string, id: string){
    const iDate = this.dateRange.get('initDate')?.value
    const eDate = this.dateRange.get('endDate')?.value

    this.date1 = this.datePipe.transform(iDate,'yyyy-MM-dd');
    this.date2 = this.datePipe.transform(eDate,'yyyy-MM-dd');
    //console.log(this.date1)
  }
  

}
