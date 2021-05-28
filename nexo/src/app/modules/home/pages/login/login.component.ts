import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministratorService} from '../../../services/administrator.service';
import {LocalStorageService} from '../../../services/local-storage.service'
import {Administrator} from '../../../models/administrator'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  admiList: Administrator[] = [];

  loginForm: FormGroup;

  constructor(
    private _builder: FormBuilder,
    private admiService: AdministratorService,
    private   localStorage: LocalStorageService,
    private router: Router
  ) {
    this.loginForm = this._builder.group({
      email:['', Validators.compose([Validators.email, Validators.required])],
      password:['', Validators.required]
    })
  }


  ngOnInit(): void {
    this.localStorage.removeToken
  }
  loginProcess(){
    if(this.loginForm.valid){
      this.admiService.login(this.loginForm.value).subscribe(result=>{
        console.log(result)
        if(result.status==200){
          this.localStorage.setToken(result.body.token)
          this.router.navigate(['admin']);
        
        }
        else{
          console.log("Acceso Denegado")
        }
      })
    }

  }

}

