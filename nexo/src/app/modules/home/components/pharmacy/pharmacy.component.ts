import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '../../../models/location';//
import { LocationService} from '../../../services/location.service';//
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Pharmacy } from 'src/app/modules/models/pharmacy';
import { PharmacyService } from 'src/app/modules/services/pharmacy.service';
import { AddPharmacyComponent } from '../dialogs/add-pharmacy/add-pharmacy.component';
import { HealthService } from 'src/app/modules/services/health.service';
import { DeletePharmacyComponent } from '../dialogs/delete-pharmacy/delete-pharmacy.component';

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
  "lng",
  "actions"];


  searchKey!: string;

  total:number=10;

  dataSource!: MatTableDataSource<any>

  pharmacyList: Pharmacy[] = [];



  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private pharmacyService: PharmacyService,
    ) {
   
  }

  ngOnInit(): void {
    this.pharmacyService.getPharmacy().subscribe(pharmacy =>{
      this.pharmacyList = pharmacy;
      this.dataSource = new MatTableDataSource(this.pharmacyList);
      this.dataSource.paginator = this.paginator;
      console.log(this.pharmacyList)
    });
    
  }
  addPharmacy(){
    this.dialog.open(AddPharmacyComponent,{
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
  onUpdate(pharmacy: Pharmacy){

  }
  onDelete(pharmacy: Pharmacy,i:number){
    console.log(pharmacy);
    const dialog = this.dialog.open(DeletePharmacyComponent,{
      width: "600px",
      data: {pharmacy: pharmacy}
    })
    dialog.afterClosed().subscribe(data=>{
      if(data!=null&&data!=undefined&&data!=""){
        this.pharmacyList.splice(i,1);
        this.total--;
        this.dataSource = new MatTableDataSource(this.pharmacyList);
      }
    })

  }
}
