import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class PaginationService {

    constructor() { }

    pagination = (pages: number, page: number) => {
        console.log("pag", pages, page);
        let botonera: string[] = [];
        let i: number;
        let neighbourhood: number = 2;
        for (i = 1; i <= pages; i++) {
            if (i == 1) {
                botonera.push(i.toString());
            } else if (i > (page - neighbourhood) && i < (page + neighbourhood)) {
                botonera.push(i.toString());
            } else if (i == pages) {
                botonera.push(i.toString());
            } else if (i == (page - neighbourhood) || i == (page + neighbourhood)) {
                botonera.push('...');
            }
        }
        return botonera;
    }

}

