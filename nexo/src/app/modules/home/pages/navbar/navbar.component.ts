import { Component, OnInit } from '@angular/core';
import { NavbarComponentService } from 'src/app/modules/services/navbar-component.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  ubi: boolean = true;

  constructor(
    private navbserv: NavbarComponentService, 
  ) { }

  ngOnInit(): void {
  }

  mapReload(){
    this.navbserv.mapReload();
  }

  renameBttn(){
    if(this.ubi==true){
      this.ubi=false;
    }
    else{
      this.ubi=true;
    }
  }

}
