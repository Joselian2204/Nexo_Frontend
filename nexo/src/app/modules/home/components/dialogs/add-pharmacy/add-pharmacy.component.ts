import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationService } from 'src/app/modules/services/location.service';
import { PharmacyService } from 'src/app/modules/services/pharmacy.service';
import { Location } from '../../../../models/location';

@Component({
  selector: 'app-add-pharmacy',
  templateUrl: './add-pharmacy.component.html',
  styleUrls: ['./add-pharmacy.component.scss']
})
export class AddPharmacyComponent implements OnInit {

  form!: FormGroup;

  departments: Location[]=[];

  selected = '';

  constructor(
    private _builder: FormBuilder,
    public dialogRef: MatDialogRef<AddPharmacyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{},
    private pharmacyService: PharmacyService,
    private locationService: LocationService
    
  ) {
    this.form = this._builder.group({
      idDepartment:[""],
      name:[""],
      location:[""],
      phoneNumber:[""],
      lat:[""],
      lng:[""]
    })
  }

  ngOnInit(): void {
    this.locationService.getLocation("bol").subscribe( dep => this.departments = dep);
  }
  cancel(){
    this.dialogRef.close();
  }
  save(){
    this.dialogRef.close();
    
    var newPharmacy={
      idDepartment: this.selected,
      name:this.form.get(["name"])?.value,
      location:this.form.get(["location"])?.value,
      phoneNumber:this.form.get(["phoneNumber"])?.value,
      lat:this.form.get(["lat"])?.value,
      lng:this.form.get(["lng"])?.value
    }; 
    console.log(newPharmacy);
    this.pharmacyService.addPharmacy(newPharmacy).subscribe({
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
