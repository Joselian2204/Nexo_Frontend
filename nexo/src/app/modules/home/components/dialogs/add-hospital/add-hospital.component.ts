import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HospitalService } from 'src/app/modules/services/hospital.service';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.scss']
})
export class AddHospitalComponent implements OnInit {
  
  form!: FormGroup;
  constructor(
    private _builder: FormBuilder,
    public dialogRef: MatDialogRef<AddHospitalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{},
    private hospitalService: HospitalService
    
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

  }
  cancel(){
    this.dialogRef.close();
  }
  save(){
    this.dialogRef.close();
    
    var newHospital={
      idDepartment:this.form.get(["idDepartment"])?.value,
      name:this.form.get(["name"])?.value,
      location:this.form.get(["location"])?.value,
      phoneNumber:this.form.get(["phoneNumber"])?.value,
      lat:this.form.get(["lat"])?.value,
      lng:this.form.get(["lng"])?.value
    }; 
    console.log(newHospital);
    this.hospitalService.addHospital(newHospital).subscribe({
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
