import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-side-nav-admin',
  templateUrl: './side-nav-admin.component.html',
  styleUrls: ['./side-nav-admin.component.scss']
})
export class SideNavAdminComponent implements OnInit {
  logotipo: string = "assets/logox2.png";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irALink(link: string) {
    this.router.navigate(["/" + link]);
  }

}
