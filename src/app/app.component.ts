import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
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

        /*
                this.oSessionService.check().pipe(
                  tap((checkData: IUsuario) => this.oUsuarioSession = checkData),
                  tap((checkData: IUsuario) => console.log("app.component * ", checkData))
                ).subscribe(err => {
                  this.oUsuarioSession = null;
                  console.log('app.component: HTTP Error: No active session', err)
                });
        */


        this.oSessionService.check().pipe(
          shareReplay()
        ).subscribe((checkData: IUsuario) => {
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
