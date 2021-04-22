import { MatSnackBar } from "@angular/material/snack-bar";
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class SnackbarService {

    constructor(
        private oSnackBar: MatSnackBar,
        private oLocation: Location,
        private oRouter: Router) { }

    openSnackBar(message: string, action: string, navigateDir: string = '', snackDuration: number = 9000) {
        if (navigateDir == '') {
            this.oSnackBar.open(message, action, {
                duration: snackDuration,
            });
        } else {
            this.oSnackBar.open(message, action, {
                duration: snackDuration,
            }).afterDismissed().subscribe(() => {
                if (navigateDir == 'back') {
                    this.oLocation.back();
                } else {
                    if (navigateDir != '') {
                        this.oRouter.navigate([navigateDir]);
                    }
                }
            });
        }
    }
}