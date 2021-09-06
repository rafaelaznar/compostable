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
  title = 'compostable';
  oUsuarioSession: IUsuario | null = null;

  constructor(public oSessionService: SessionService, private router: Router) {


    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        /* Your code goes here on every router change */
        //console.log("app.component  ev", ev);


        /*
                this.oSessionService.check().pipe(
                  tap((checkData: IUsuario) => this.oUsuarioSession = checkData),
                  tap((checkData: IUsuario) => console.log("app.component * ", checkData))
                ).subscribe(err => {
                  this.oUsuarioSession = null;
                  console.log('app.component: HTTP Error: No active session', err)
                });
        */


        if (Object.keys(JSON.parse(localStorage.getItem("user") || '{}')).length === 0) {

          this.oUsuarioSession = null;

          if (ev.url != "/producto" && ev.url != "/" && ev.url != "/home" && ev.url != "/about" && ev.url != "/login") {
            //console.log("app.component navigate to login");
            router.navigate(['/login']);
          }

          /*
          this.oSessionService.check().pipe(
            //shareReplay()
          ).subscribe((checkData: IUsuario) => {
            console.log("app.component constructor: check user data from check: ");
            this.oUsuarioSession = checkData;
            localStorage.setItem("user", JSON.stringify(checkData));
          }, err => {
            this.oUsuarioSession = null;
            console.log('app.component: HTTP Error: No active session', err)
          })
          */
        } else {

          this.oUsuarioSession = JSON.parse(localStorage.getItem("user") || '{}');
          //console.log("app.component:constructor: check user data from localStorage!", this.oUsuarioSession);

        }


      }

    });
  }

  ngOnInit() {
  }

  onCheck(checkData: any) {
    //console.log("onCheck de app.component: checkData: ");
    //console.log(checkData);
  }

}
