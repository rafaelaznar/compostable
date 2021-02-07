import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, take, publishReplay, refCount, retry, catchError, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { of } from 'rxjs';
import { CSessionResolved, ISessionResolved, IUsuario } from 'src/app/model/model-interfaces';
import { shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class SessionService {

    constructor(private http: HttpClient, private router: Router) { }

    url = 'http://localhost:8082/session/';

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

    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    login(loginData: any): Observable<any> {
        return this.http.post(this.url, loginData, {
            withCredentials: true,
            headers: this.headers
        }).pipe(retry(1), catchError(this.handleError));
    }

    logout(): Observable<any> {
        return this.http.delete(this.url, {
            withCredentials: true
        }).pipe(retry(1), catchError(this.handleError));
    }

    check(): Observable<ISessionResolved> {
        return this.http.get(this.url, {
            withCredentials: true
        }).pipe(
            map((usuario: any) => (new CSessionResolved(false, "", usuario)),
                shareReplay(1)
            ), catchError((error) => {
                return of(new CSessionResolved(true, "ERROR: "));
            }));
    }


}

