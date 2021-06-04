import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from 'src/app/modules/models/location';
import { Pharmacy } from 'src/app/modules/models/pharmacy';
import { LocationService } from 'src/app/modules/services/location.service';
import { PharmacyService } from 'src/app/modules/services/pharmacy.service';

@Component({
  selector: 'app-update-pharmacy',
  templateUrl: './update-pharmacy.component.html',
  styleUrls: ['./update-pharmacy.component.scss']
})
export class UpdatePharmacyComponent implements OnInit {

  
  form!: FormGroup;

  departments: Location[]=[];

  selected: String = '';
  aux: String = '';

  constructor(
    private _builder: FormBuilder,
    public dialogRef: MatDialogRef<UpdatePharmacyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{pharmacy: Pharmacy},
    private pharmacyService: PharmacyService,
    private locationService: LocationService
    
  ) {
    this.form = this._builder.group({
      name:[data.pharmacy.name],
      location:[data.pharmacy.location],
      phoneNumber:[data.pharmacy.phoneNumber],
      lat:[data.pharmacy.lat],
      lng:[data.pharmacy.lng]
    })
  }

  ngOnInit(): void {
    this.aux = this.data.pharmacy.idDepartament;
    this.locationService.getLocation("bol").subscribe( dep => this.departments = dep);
  }
  cancel(){
    this.dialogRef.close();
  }
  search(department: String){
    this.departments.forEach(element => {
      if(department==element.name){
        this.selected=element.id 
      }

    });
  }
  update(){
    this.dialogRef.close();

    if(this.selected.length==0){
      console.log(this.selected)
      console.log(this.aux)
      this.search(this.aux)
    }
    var newPharmacy={
      idPharmacy: this.data.pharmacy.idPharmacy,
      idDepartment: this.selected,
      name:this.form.get(["name"])?.value,
      location:this.form.get(["location"])?.value,
      phoneNumber:this.form.get(["phoneNumber"])?.value,
      lat:this.form.get(["lat"])?.value,
      lng:this.form.get(["lng"])?.value
    }; 
    console.log(newPharmacy);
    this.pharmacyService.update(newPharmacy).subscribe({
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
