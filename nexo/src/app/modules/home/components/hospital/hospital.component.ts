import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '../../../models/location';//
import { LocationService} from '../../../services/location.service';//
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Hospital } from 'src/app/modules/models/hospital';
import { HospitalService } from 'src/app/modules/services/hospital.service';


@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {
  
  displayedColumns: string[] = ["idHospital",
  "idDepartment",
  "name",
  "location",
  "phoneNumber",
  "lat",
  "lng",];

  searchKey!: string;

  total:number=10;

  dataSource!: MatTableDataSource<any>

  hospitalList: Hospital[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private hospitalService: HospitalService
    ) {
   
  }

  ngOnInit(): void {
    this.hospitalService.getPharmacy().subscribe(hospitals =>{
      this.hospitalList = hospitals
      this.dataSource = new MatTableDataSource(this.hospitalList);
      console.log(this.hospitalList)
    });
    
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
