import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pharmacy } from 'src/app/modules/models/pharmacy';
import { PharmacyService } from 'src/app/modules/services/pharmacy.service';

@Component({
  selector: 'app-delete-pharmacy',
  templateUrl: './delete-pharmacy.component.html',
  styleUrls: ['./delete-pharmacy.component.scss']
})
export class DeletePharmacyComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletePharmacyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{pharmacy: Pharmacy},
    private pharmacyService: PharmacyService
  ) { }

  ngOnInit(): void {
  }
  delete(){
    const InitPath = "/pharmacy/";
    const finalPath = InitPath.concat(this.data.pharmacy.idPharmacy.toString());
    this.pharmacyService.delete(finalPath).subscribe({
      next:(data)=>{
        this.dialogRef.close(this.data.pharmacy)
      },
      error: (error)=>{
        console.log(error)
      }
    });
  }
  cancel(){
    this.dialogRef.close();
  }

}
