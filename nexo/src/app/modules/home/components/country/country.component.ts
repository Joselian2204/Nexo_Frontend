import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countries: any;

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
