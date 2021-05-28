import { Component, Inject, OnInit } from '@angular/core';
import { LocationService } from 'src/app/modules/services/location.service';
import { Location } from '../../../../models/location';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-customfilters',
  templateUrl: './customfilters.component.html',
  styleUrls: ['./customfilters.component.scss']
})
export class CustomfiltersComponent implements OnInit {

  selectedDep = 'bol';
  selectedMun = 'none';
  selectedTime = 'ful';
  selectedCon = 'con';

  depar = 'department/';
  muni = 'municipio/';
  coun = 'country/'

  actualPath = ''

  departments: Location[]=[];
  municipalities: Location[]=[];
  countries: Location[] = [];

  constructor(private locationService: LocationService,public dialogRef: MatDialogRef<CustomfiltersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {path: string}) { }

  ngOnInit(): void {
    this.locationService.getLocation("world").subscribe( con => this.countries = con);
    this.locationService.getLocation("bol").subscribe( dep => this.departments = dep);
  }

  setMunicipalities(id: string): void {
    if (id == 'none'){
      this.municipalities = [];
    }
    else{
      this.locationService.getLocation("municipios/"+id).subscribe(mun => this.municipalities = mun);
    }
  }

  setActualPath(path: string){
    this.actualPath = path
  }

  returnPath(): any{
    this.dialogRef.close();
    return this.actualPath
  }

}