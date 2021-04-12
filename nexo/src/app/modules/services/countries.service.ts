import { Injectable } from '@angular/core';
import { CountryComponent } from '../home/components/country/country.component';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  private country!: CountryComponent;


  /*public getCountryId(string: id){
    this.getCountryId =
  }*/
}
