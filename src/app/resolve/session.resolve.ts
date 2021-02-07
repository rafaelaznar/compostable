import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SessionService } from '../service/session.service';
import { ISessionResolved } from '../model/model-interfaces';

@Injectable()
export class SessionResolver implements Resolve<Observable<ISessionResolved>> {

    constructor(private oSessionService: SessionService) { }

    resolve(): Observable<ISessionResolved> {
        //return of('Hello from session resolver!').pipe(delay(2000));
        return this.oSessionService.check();
    }

}