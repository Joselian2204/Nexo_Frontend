import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  logotipo: string = "assets/logox2.png";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irALink(link: string) {
    this.router.navigate(["/" + link]);
  }
}
