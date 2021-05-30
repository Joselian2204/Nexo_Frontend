import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '../../../models/location';//
import { LocationService} from '../../../services/location.service';//
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  displayedColumns: string[] = ["id_location",
  "Name",
  "Population",
  "Cases",
  "Deaths",
  "Recovered",
  "Vaccine",];

  searchKey!: string;

  total:number=10;

  dataSource!: MatTableDataSource<any>

  po: Location[] = [];



  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private locationService: LocationService
    ) {
   
  }

  ngOnInit(): void {
    this.locationService.getLocation('world').subscribe(con =>{
      this.po = con;
      this.dataSource = new MatTableDataSource(this.po);
      this.dataSource.paginator = this.paginator;
      //console.log(this.po)
    });
    
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
