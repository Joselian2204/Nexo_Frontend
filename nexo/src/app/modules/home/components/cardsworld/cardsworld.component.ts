import { Component, OnInit } from '@angular/core';
import { LocationService} from '../../../services/location.service'
import { Location } from '../../../models/location';

@Component({
  selector: 'app-cardsworld',
  templateUrl: './cardsworld.component.html',
  styleUrls: ['./cardsworld.component.scss']
})
export class CardsworldComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  total!: Location;

  ngOnInit(): void {
    this.locationService.getLocation("world_cases").subscribe( tot => this.total = tot);
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
