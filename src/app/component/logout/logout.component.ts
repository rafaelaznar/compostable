import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ISessionResolved, IUsuario, Usuario } from 'src/app/model/model-interfaces';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent {

  oSessionData: ISessionResolved;
  oUsuarioSession: IUsuario | null;

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oSessionService: SessionService) {

    this.oSessionData = this.oRoute.snapshot.data.message;
    if (!this.oSessionData.isError) {
      this.oUsuarioSession = this.oSessionData.user;
    } else {
      this.oUsuarioSession = null;
      oRouter.navigate(['/home']);
    }
  }

  public closeSession() {
    this.oSessionService.logout().subscribe(data => {
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