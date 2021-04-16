import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countries: any;

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

  times: any[] = ["Ultimo Mes","Ultimo Trimestre","Ultimo Semestre","Ultimo Año","Inicio"];


  constructor() { 
    this.countries =[
      {name:"Afghanistan"},
      {name:"Angola"},
      {name:"Albania"},
      {name:"United Arab Emirates"},
      {name:"Argentina"},
      {name:"Armenia"},
      {name:"Australia"},
      {name:"Austria"},
      {name:"Azerbaijan"},
      {name:"Burundi"},
      {name:"Belgium"},
      {name:"Benin"},
      {name:"Burkina Faso"},
      {name:"Bangladesh"},
      {name:"Bulgaria"},
      {name:"Bahrain"},
      {name:"Bosnia and Herzegovina"},
      {name:"Belarus"},
      {name:"Belize"},
      {name:"Bolivia"},
      {name:"Brazil"},
      {name:"Brunei Darussalam"},
      {name:"Bhutan"},
      {name:"Botswana"},
      {name:"Central African Republic"},
      {name:"Canada"},
      {name:"Switzerland"},
    ]
  }

  ngOnInit(): void {
  }

}
