import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ISessionResolved, IUsuario, Usuario } from './model/model-interfaces';
import { SessionService } from './service/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'WildCartAngularClient';
  oUsuarioSession: IUsuario | null = null;

  constructor(public oSessionService: SessionService, private router: Router) {

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        /* Your code goes here on every router change */

        this.oSessionService.check().subscribe((checkData: ISessionResolved) => {
          //console.log("app.component checkData", checkData);
          if (!checkData.isError) {
            this.oUsuarioSession = checkData.user;
            console.log("app.component oUsuarioSession", this.oUsuarioSession);
          } else {
            this.oUsuarioSession = null;
            console.log("app.component oUsuarioSession null: ", this.oUsuarioSession);
          }
        })
      }
    });
  }

  ngOnInit() {
  }

  onCheck(checkData: any) {
    console.log("onCheck de app.component: checkData: ");
    console.log(checkData);
  }

}
