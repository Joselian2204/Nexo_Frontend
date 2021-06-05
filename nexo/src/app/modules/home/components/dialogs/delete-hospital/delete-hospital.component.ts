import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hospital } from 'src/app/modules/models/hospital';
import { HospitalService } from 'src/app/modules/services/hospital.service';

@Component({
  selector: 'app-delete-hospital',
  templateUrl: './delete-hospital.component.html',
  styleUrls: ['./delete-hospital.component.scss']
})
export class DeleteHospitalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteHospitalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{hospital: Hospital},
    private hospitalService: HospitalService) { }

  ngOnInit(): void {
  }
  cancel(){
    this.dialogRef.close();
  }
  delete(){
    this.dialogRef.close();
    const InitPath = "/hospital/";
    const finalPath = InitPath.concat(this.data.hospital.idHospital.toString());

    this.hospitalService.delete(finalPath).subscribe({
      next:(data)=>{
        this.dialogRef.close(this.data.hospital);        
      },
      error:(error)=>{
        console.log(error);
      }
    });
  }
}