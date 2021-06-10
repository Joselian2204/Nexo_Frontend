import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VariablesBeta } from 'src/app/modules/models/variablesBeta';
import { PredictionService } from 'src/app/modules/services/prediction.service';

@Component({
  selector: 'app-betas-dialog',
  templateUrl: './betas-dialog.component.html',
  styleUrls: ['./betas-dialog.component.scss']
})
export class BetasDialogComponent implements OnInit {

  actualo2 = ''

  actualo = ''

  actualb0 = ''

  actualb1 = ''

  actualr2 = ''

  constructor(private predictionService: PredictionService,
    @Inject(MAT_DIALOG_DATA) public data:{pth: any,var:any}) { }

  myVariables!: VariablesBeta;



  ngOnInit(): void {
    this.predictionService.getVariables(this.data.pth,this.data.var).subscribe(dt =>{
      this.myVariables = dt;

      this.actualo = this.myVariables.o;
      this.actualb0 = this.myVariables.b0;
      this.actualb1 = this.myVariables.b1;
      this.actualo2 = this.myVariables.o2;
      this.actualr2 = this.myVariables.r2;
    })
  }
}
