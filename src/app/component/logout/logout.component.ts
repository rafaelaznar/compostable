import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUsuario, Usuario } from 'src/app/model/model-interfaces';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {

  oUsuarioSession: IUsuario | null = null;

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oSessionService: SessionService) {

    console.log("logout.component constructor");
    //console.log(this.oRoute.snapshot.data.message);


    if (!this.oRoute.snapshot.data.message) {
      oRouter.navigate(['/home']);
    } else {
      this.oUsuarioSession = this.oRoute.snapshot.data.message;
    }

    /*
        this.oRoute.data.subscribe(
          res => {
            console.log("logout.component response= ", res.message);
            this.oUsuarioSession = res.message;
          },
          err => {
            console.log('logout.component HTTP Error', err);
            oRouter.navigate(['/home']);
          }
        );
    */
  }

  ngOnInit() {
    console.log("logout.component ngOninit")
  }

  public closeSession() {
    this.oSessionService.logout().subscribe(data => {
      localStorage.clear(); 
      this.oRouter.navigate(['/home']);
    });

    /*
        if (this.oUsuarioSessionData)
          this.oUsuarioSessionData.subscribe((oSessionResolved: ISessionResolved) => {
            if (!oSessionResolved.isError) {
              this.oUsuarioSession = oSessionResolved.user;
            } else {
              this.oRouter.navigate(['/home']);
            }
    
          })
      */
  }
}