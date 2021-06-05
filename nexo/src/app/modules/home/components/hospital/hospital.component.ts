import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '../../../models/location';//
import { LocationService} from '../../../services/location.service';//
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Hospital } from 'src/app/modules/models/hospital';
import { HospitalService } from 'src/app/modules/services/hospital.service';
import { AddHospitalComponent } from '../dialogs/add-hospital/add-hospital.component';
import { HttpClient } from '@angular/common/http';
import { DeleteHospitalComponent } from '../dialogs/delete-hospital/delete-hospital.component';
import { UpdateHospitalComponent } from '../dialogs/update-hospital/update-hospital.component';


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
  "lng",
  "actions"];

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
  onDelete(hospital: Hospital,i:number){
    const dialog = this.dialog.open(DeleteHospitalComponent,{
      width: "600px",
      data: {hospital},
    })
    dialog.afterClosed().subscribe(data=>{
      if(data!=null&&data!=undefined&&data!=""){
        this.hospitalList.splice(i,1);
        this.total--;
        this.dataSource = new MatTableDataSource(this.hospitalList);
      }
    })

  }
  onUpdate(hospital: Hospital){
    const dialog = this.dialog.open(UpdateHospitalComponent,{
      width: "450px",
      data: {hospital},
    })
    dialog.afterClosed().subscribe(data=>{
      if(data!=null&&data!=undefined&&data!=""){
        this.total--;
        this.dataSource = new MatTableDataSource(this.hospitalList);
      }
    })

  }

}
