import { Component, OnInit } from '@angular/core';
import { LocationService} from '../../../services/location.service'
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departments: Location[] = [];

  constructor(private locationService: LocationService) { 
  }

  ngOnInit(): void {
    this.locationService.getLocation("bol").subscribe( dep => {console.log(dep);this.departments = dep});
  }

}
