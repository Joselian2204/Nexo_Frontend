import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LocalStorageService } from 'src/app/modules/services/local-storage.service';

@Component({
  selector: 'app-side-nav-admin',
  templateUrl: './side-nav-admin.component.html',
  styleUrls: ['./side-nav-admin.component.scss']
})
export class SideNavAdminComponent implements OnInit {
  logotipo: string = "assets/logox2.png";

  constructor(private router: Router,
    private localStorageService: LocalStorageService
    ) { }

  ngOnInit(): void {
  }

  irALink(link: string) {
    this.router.navigate(["admin/" + link]);
  }

  close(link: string) {
    this.router.navigate(["/" + link]);
  }

  logout(){
    this.localStorageService.removeToken();
    this.router.navigate([""]);

  }

}
