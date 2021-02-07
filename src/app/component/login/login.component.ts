import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { SessionService } from 'src/app/service/session.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { ILogin, ISessionResolved, IUsuario } from 'src/app/model/model-interfaces';

import { DialogsService } from '../../service/dialogs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public result: any;
  public data: any;
  //formularioLogin: FormGroup;
  public dataCheck: any;
  formularioLogin: FormGroup;
  stock = "hola mundo";

  oSessionData: ISessionResolved;
  oUsuarioSession: IUsuario | null;

  constructor(private LoginService: SessionService,
    private FormBuilder: FormBuilder,
    private oRouter: Router,
    private oRoute: ActivatedRoute,
    private dialogsService: DialogsService
  ) {

    this.oSessionData = this.oRoute.snapshot.data.message;
    if (this.oSessionData.isError) {
      this.oUsuarioSession = this.oSessionData.user;
    } else {
      this.oUsuarioSession = null;
      oRouter.navigate(['/home']);
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



  onSubmit() {
    const formData: any = new FormData();
    const loginData = { login: this.formularioLogin.get('login')!.value, password: this.formularioLogin.get('password')!.value };
    console.log(formData);
    this.LoginService.login(JSON.stringify(loginData)).subscribe(
      data => {
        this.data = data;

        if (this.data != null) {
          this.oRouter.navigate(['/home']);
        } else {
          //this.dialog.open(DialogDataExampleDialog, "error de autenticación");
        }
      }

    );
    return false;
  }


}
