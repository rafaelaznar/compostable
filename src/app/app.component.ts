import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUsuario, Usuario } from './model/model-interfaces';
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
        this.oSessionService.check().subscribe((checkData: IUsuario) => {
          console.log("app.component constructor: data from check: ");
          this.oUsuarioSession = checkData;
        }, err => {
          this.oUsuarioSession = null;
          console.log('app.component: HTTP Error: No active session', err)
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
