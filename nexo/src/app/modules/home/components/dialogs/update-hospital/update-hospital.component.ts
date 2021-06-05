import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hospital } from 'src/app/modules/models/hospital';
import { Location } from 'src/app/modules/models/location';
import { HospitalService } from 'src/app/modules/services/hospital.service';
import { LocationService } from 'src/app/modules/services/location.service';
import { UpdatePharmacyComponent } from '../update-pharmacy/update-pharmacy.component';

@Component({
  selector: 'app-update-hospital',
  templateUrl: './update-hospital.component.html',
  styleUrls: ['./update-hospital.component.scss']
})
export class UpdateHospitalComponent implements OnInit {
  
  form!: FormGroup;

  departments: Location[]=[];

  selected: String = '';

  aux: String = '';

  actualDepartment!: any;

  actualDepartmentId!: any;

  constructor(
    private _builder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateHospitalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{hospital: Hospital},
    private hospitalService: HospitalService,
    private locationService: LocationService
    
  ) {
    this.form = this._builder.group({
      name:[data.hospital.name],
      location:[data.hospital.location],
      phoneNumber:[data.hospital.phoneNumber],
      lat:[data.hospital.lat],
      lng:[data.hospital.lng]
    })
  }

  ngOnInit(): void {
    this.actualDepartment = this.data.hospital.idDepartment;
    this.locationService.getLocation("bol").subscribe( dep => {
      this.departments = dep;
      this.departments.map(x => {
        if(x.name === this.actualDepartment){
          this.actualDepartmentId = x.id;
          this.selected = this.actualDepartmentId
        }
      })
    });
  }

  cancel(){
    this.dialogRef.close();
  }

  update(){
    this.dialogRef.close();
    var newHospital={
      idHospital: this.data.hospital.idHospital,
      idDepartment: this.selected,
      name:this.form.get(["name"])?.value,
      location:this.form.get(["location"])?.value,
      phoneNumber:this.form.get(["phoneNumber"])?.value,
      lat:this.form.get(["lat"])?.value,
      lng:this.form.get(["lng"])?.value
    }; 
    console.log(newHospital);
    this.hospitalService.update(newHospital).subscribe({
      next:(data)=>{
        this.dialogRef.close();     
      },
      error:(error)=>{
        this.dialogRef.close();    
        console.log(error);
      }
    });
  }

}