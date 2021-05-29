import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '../../../models/location';//
import { LocationService} from '../../../services/location.service';//
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Pharmacy } from 'src/app/modules/models/pharmacy';
import { PharmacyService } from 'src/app/modules/services/pharmacy.service';
import { AddPharmacyComponent } from '../dialogs/add-pharmacy/add-pharmacy.component';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyComponent implements OnInit {
 
  displayedColumns: string[] = ["idPharmacy",
  "idDepartment",
  "name",
  "location",
  "phoneNumber",
  "lat",
  "lng",];


  searchKey!: string;

  total:number=10;

  dataSource!: MatTableDataSource<any>

  pharmacyList: Pharmacy[] = [];



  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private pharmacyService: PharmacyService
    ) {
   
  }

  ngOnInit(): void {
    this.pharmacyService.getPharmacy().subscribe(pharmacy =>{
      this.pharmacyList = pharmacy;
      this.dataSource = new MatTableDataSource(this.pharmacyList);
      console.log(this.pharmacyList)
    });
    
  }
  addPharmacy(){
    this.dialog.open(AddPharmacyComponent,{
      width:"600px",
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
