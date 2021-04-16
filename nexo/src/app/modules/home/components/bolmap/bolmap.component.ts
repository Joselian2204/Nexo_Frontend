import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocationService} from '../../../services/location.service';
import { Location } from '../../../models/location';

@Component({
  selector: 'app-bolmap',
  templateUrl: './bolmap.component.html',
  styleUrls: ['./bolmap.component.scss']
})
export class BolmapComponent implements OnInit {

  centerbol = {lat:-16.290154, lng:-63.588653};
  zoom = 6.4;
  display?: google.maps.LatLngLiteral;

  pos: Location[] = [];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getLocation("bol").subscribe( con => this.pos = con);
  }

}
