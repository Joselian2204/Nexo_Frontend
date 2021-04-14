import { Component, OnInit } from '@angular/core';
import { LocationService} from '../../../services/location.service'
import { Location } from '../../../models/location';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departments: Location[]=[{id:"bol1",name:"la paz",lat:50.0,lng:50.0},{id:"bol1",name:"santa cruz",lat:50.0,lng:50.0},{id:"bol1",name:"cochabamba",lat:50.0,lng:50.0},{id:"bol1",name:"tarija",lat:50.0,lng:50.0}];

  constructor(private locationService: LocationService) { 
  }

  ngOnInit(): void {
    //this.locationService.getLocation("bol").subscribe( dep => this.departments = dep);
  }

}
