import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boliviadashboard',
  templateUrl: './boliviadashboard.component.html',
  styleUrls: ['./boliviadashboard.component.scss']
})
export class BoliviadashboardComponent implements OnInit {

  selectedDep = 'bol';
  selectedMun = 'none';

  constructor() { }

  ngOnInit(): void {
  }

}
