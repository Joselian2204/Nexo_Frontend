import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '../../../models/location';//
import { LocationService} from '../../../services/location.service';//
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Hospital } from 'src/app/modules/models/hospital';
import { HospitalService } from 'src/app/modules/services/hospital.service';
import { AddHospitalComponent } from '../dialogs/add-hospital/add-hospital.component';


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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private hospitalService: HospitalService
    ) {
   
  }

  ngOnInit(): void {
    this.hospitalService.getHospital().subscribe(hospitals =>{
      this.hospitalList = hospitals
      this.dataSource = new MatTableDataSource(this.hospitalList);
      this.dataSource.paginator = this.paginator;
      //console.log(this.hospitalList)
    });
    
  }
  addHospital(){
    this.dialog.open(AddHospitalComponent,{
      width:"450px",
      data: {}
    })
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
