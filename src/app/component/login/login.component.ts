import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { SessionService } from 'src/app/service/session.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { ILogin, IUsuario } from 'src/app/model/model-interfaces';

import { DialogsService } from '../../service/dialogs.service';

import { CryptoService } from '../../service/crypto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public result: any;
  public data: any;
  formularioLogin: FormGroup;
  public dataCheck: any;
  stock = "hola mundo";

  oUsuarioSession: IUsuario | null = null;

  constructor(
    private FormBuilder: FormBuilder,
    private dialogsService: DialogsService,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oSessionService: SessionService,
    private oCryptoService: CryptoService) {

    if (this.oRoute.snapshot.data.message) {
      console.log("login", this.oRoute.snapshot.data.message);
      oRouter.navigate(['/home']);
    } else {
      this.oUsuarioSession = this.oRoute.snapshot.data.message;
    }

    //this.loginData = null; //{ user: "", password: "" };
    this.formularioLogin = <FormGroup>this.FormBuilder.group({
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  public openDialog() {
    console.log("--");
    this.dialogsService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => this.result = res);
    //https://stackblitz.com/edit/material-dialogs-sample?file=app%2Fapp.component.ts
    return false; // if you don't return false pops console ERROR TypeError: this.selector is not a function
  }

  public loginAdmin() { //debug!!
    this.formularioLogin.controls['login'].setValue("admin");
    this.formularioLogin.controls['password'].setValue("trolleyes");
    this.onSubmit();
  }

  onSubmit() {
    const formData: any = new FormData();
    const loginData = { login: this.formularioLogin.get('login')!.value, password: this.oCryptoService.getSHA256(this.formularioLogin.get('password')!.value) };
    console.log("login:onSubmit: ", loginData);
    this.oSessionService.login(JSON.stringify(loginData)).subscribe(
      data => {
        this.data = data;

        localStorage.setItem("user", JSON.stringify(data));

        if (this.data != null) {
          this.oRouter.navigate(['/home']);
        } else {
          //this.dialog.open(DialogDataExampleDialog, "error de autenticaci??n");
        }
      }

    );
    return false;
  }



  check() {
    console.log("login:check: ");
    this.oSessionService.check().subscribe(data => { console.log("check result: ", data) }
    );
  }

}
