import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LocalStorageService } from 'src/app/modules/services/local-storage.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  logotipo: string = "assets/logox2.png";

  constructor(private router: Router
    ) { }

  ngOnInit(): void {
  }

  irALink(link: string) {
    this.router.navigate(["/" + link]);
  }

}
