import { getLocaleDateFormat } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapMarker } from '@angular/google-maps';
import { LocationService} from '../../../services/location.service';
import { Location } from '../../../models/location';
@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.scss']
})
export class WorldmapComponent implements OnInit {

  @ViewChild('idsvg', {static:true}) idsvg!: ElementRef;

  pos: Location[] = [];

  centerworld = {lat: 12, lng: 0};
  zoom = 3;
  display?: google.maps.LatLngLiteral;
  val:any;

  constructor(private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.locationService.getLocation("world").subscribe( con => this.pos = con);
  }

}
