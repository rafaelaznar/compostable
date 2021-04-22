import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, take, publishReplay, refCount, retry, catchError, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { of } from 'rxjs';
import { IUsuario, Usuario } from 'src/app/model/model-interfaces';
import { shareReplay } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})

export class SessionService {

    constructor(
        private oConfigService: ConfigService,
        private http: HttpClient,
        private router: Router) { }

    sURL = this.oConfigService.API_URL + '/session/';

    onCheck = new EventEmitter<any>();

    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        //window.alert(errorMessage);
        return throwError(errorMessage);
    }

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        withCredentials: true
    };

    login(loginData: any): Observable<IUsuario> {
        return this.http.post(this.sURL, loginData, this.httpOptions).pipe(
            tap((u: any) => console.log("session.service login HTTP request executed", u)),
            retry(1),
            catchError(this.handleError));
    }

    logout(): Observable<any> {
        return this.http.delete(this.sURL, this.httpOptions).pipe(
            retry(1),
            catchError(this.handleError));
    }

    check(): Observable<IUsuario> {
        console.log("session.service check");
        return this.http.get<IUsuario>(this.sURL, this.httpOptions).pipe(
            tap((u: any) => console.log("session.service check HTTP request executed", u)),
            //shareReplay(),
            catchError(err => {
                console.log('session.service: caught error and rethrowing', err);
                return throwError(err);
            })
        )
    }

    /*
    checkUser(): Observable<IUsuario | null> {

        if (Object.keys(JSON.parse(localStorage.getItem("user") || '{}')).length === 0) {
            this.check().pipe(
            ).subscribe((checkData: IUsuario) => {
                console.log("session.service checkUser: check user data from check: ");                
                localStorage.setItem("user", JSON.stringify(checkData));
                return of(checkData);
            }, err => {
                console.log('session.service checkUser: HTTP Error: No active session', err)
                return of(null);                
            })
        } else {
            console.log("session.service checkUser: check user data from localStorage!", JSON.parse(localStorage.getItem("user")|| '{}'));
            return of(JSON.parse(localStorage.getItem("user")|| '{}'));         
        }
    }
    */

    /*
        check(): Observable<IUsuario | null> {
            return this.http.get(this.url, { withCredentials: true }).pipe(
                shareReplay(1),
                catchError((error) => (of(null)))
            );
        }
    */

}

