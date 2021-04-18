import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponentService } from 'src/app/modules/services/navbar-component.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selecmap: boolean = true;

  constructor(
    private navbserv: NavbarComponentService,
    ) {

    }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.navbserv.setHome(this);
  }

  mapReload(){
    if(this.selecmap==true){
      this.selecmap=false;
    }
    else{
      this.selecmap=true;
    }
  }
}
