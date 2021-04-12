import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.scss']
})
export class WorldmapComponent implements OnInit {

  temp: any;
  @ViewChild('idsvg', {static:true}) idsvg!: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  changeColor(idCountry: string){
    if(this.temp !=null) this.temp.style.fill = "#e1f6f4";
    let svgDoc = this.idsvg.nativeElement.contentDocument;
    let country = svgDoc.querySelector(`#${idCountry}`);
    country.style.fill = "#166678";
    this.temp = country;
  }

}
