import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-betas-dialog',
  templateUrl: './betas-dialog.component.html',
  styleUrls: ['./betas-dialog.component.scss']
})
export class BetasDialogComponent implements OnInit {

  actualb0 = 0.5;

  actualb1 = 0.5;

  constructor() { }

  ngOnInit(): void {
  }

}
