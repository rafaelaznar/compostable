import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { of, throwError } from 'rxjs';
import { catchError, delay, map, shareReplay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SessionService } from '../service/session.service';
import { IUsuario } from '../model/model-interfaces';

@Injectable()
export class SessionResolver implements Resolve<Observable<IUsuario | null>> {

    constructor(private oSessionService: SessionService) { }

    resolve(): Observable<IUsuario | null> {

        console.log("--> resolve");
        
        if (Object.keys(JSON.parse(localStorage.getItem("user") || '{}')).length === 0) {
            console.log("session.resolve.. user null");
            return of(null);
            /*
            return this.oSessionService.check().pipe(
                tap((u: any) => console.log("resolver check HTTP request executed", u)),
                catchError(error => {
                    console.log('session.resolver: caught error', error);
                    return of(null) // si hay error devolvemos un observable de null
                    //return throwError(error);
                }));
                */
          } else {
            console.log("session.resolve.. user from localStorage!");
            return of( JSON.parse(localStorage.getItem("user") || '{}'));            
          }

    }



    


}