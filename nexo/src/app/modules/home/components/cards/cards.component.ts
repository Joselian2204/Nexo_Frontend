import { Component, OnInit } from '@angular/core';
import { LocationService} from '../../../services/location.service'
import { Location } from '../../../models/location';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  total!: Location;

  ngOnInit(): void {
    this.locationService.getLocation("bol_cases").subscribe( tot => this.total = tot);
  }

  validator(parameter: any): string{
    if (parameter == 0){
      return "No disponible";
    }
    else{
      return parameter;
    }
  }
}
