import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departments: any 

  constructor() { 
    this.departments=[
      {name:"LA PAZ"},{name:"SANTA CRUZ"},{name:"COCHABAMBA"}
    ]
  }

  ngOnInit(): void {
  }

}
