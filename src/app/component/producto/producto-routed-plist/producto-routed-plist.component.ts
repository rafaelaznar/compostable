import { Component, OnInit } from '@angular/core';
import { IPage, IProducto, Page } from 'src/app/model/model-interfaces';
import { ProductoService } from 'src/app/service/producto.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { MatSnackBar } from '@angular/material/snack-bar';
import { PaginationService } from 'src/app/service/pagination.service';

@Component({
  selector: 'app-producto-routed-plist',
  templateUrl: './producto-routed-plist.component.html',
  styleUrls: ['./producto-routed-plist.component.css']
})

export class ProductoRoutedPlistComponent implements OnInit {
  entityName: String = "producto";
  entitiesName: String = "productos";

  currentPageIndex: number = 0;
  currentPageSize: number = 10;
  currentSortField: string = "id";
  currentSortDirection: string = "asc";  
  initialFilter: string = "";
  currentFilter: string = "";

  totalElements: number = 0;
  totalPages: number = 0;
  page: IPage = new Page();
  entities: IProducto[] | undefined;

  loading: boolean = false;

  paginationPad: string[] = [];
  
  constructor(
    private productoService: ProductoService,
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute, 
    private _location: Location, 
    private _snackBar: MatSnackBar,
    private paginationService: PaginationService,
    ) {
    oActivatedRoute.params.subscribe(val => {
      if (this.oActivatedRoute.snapshot.params.page) {
        this.currentPageIndex = Number(this.oActivatedRoute.snapshot.params.page);
        if ((this.currentPageIndex) <= 0) {
          this.currentPageIndex = 1;
        }
      } else {
        this.currentPageIndex = 1;
      }
      if (this.oActivatedRoute.snapshot.params.rpp) {
        this.currentPageSize = Number(this.oActivatedRoute.snapshot.params.rpp);
        if ((this.currentPageSize) > 100) {
          this.currentPageSize = 100;
        }
      } else {
        this.currentPageSize = 10;
      }
      this.currentSortField = (this.oActivatedRoute.snapshot.params.sort);
      this.currentSortDirection = (this.oActivatedRoute.snapshot.params.dir);
      this.initialFilter = (this.oActivatedRoute.snapshot.params.filter);
      this.currentFilter =this.initialFilter;
      this.getPage(this.currentPageIndex, this.currentPageSize, this.currentSortField, this.currentSortDirection, this.currentFilter);
    });
  }

  getPage = (pageNumber: number, rpp: number, sortField: string, sortDirection: string, filter: string | undefined = undefined) => {
    this._snackBar.open("Cargando datos", "Por favor espera...");
    this.loading = true;
    this.productoService.getProductosBootstrap(pageNumber - 1, rpp, sortField, sortDirection, filter).subscribe((oPage: IPage) => {
      if (pageNumber > oPage['totalPages']) {
        pageNumber = oPage['totalPages'];
        this.productoService.getProductosBootstrap(pageNumber - 1, rpp, sortField, sortDirection, filter).subscribe((oPage: IPage) => {
          this.page = oPage;
          this.entities = oPage.content;
          this.totalElements = oPage['totalElements'];
          this.totalPages = oPage['totalPages'];
          this.paginationPad = this.paginationService.pagination(this.totalPages, this.currentPageIndex);
          this.currentPageSize = oPage['size'];
          this.currentPageIndex = pageNumber;
          this._snackBar.dismiss();
        }, error => {
          if (error.status == 401) {
            //se ha perdido la sesión        
            this.openSnackBar("Su sesión ha expirado. Por favor debe volver a autenticarse en la página de login.", "ERROR DE SESIÓN");
            localStorage.clear();
            if (this.oRouter !== undefined) {
              this.oRouter.navigate(['/login']);
            }
          } else {
            //servidor caido
            this.openSnackBar("Hay algún problema técnico con el servidor en Internet. Por favor avise al técnico de la aplicación.", "ERROR DE SERVIDOR");
            localStorage.clear();
            if (this.oRouter !== undefined) {
              this.oRouter.navigate(['/home']);
            }
          }
        })
      } else {
        this.page = oPage;
        this.entities = oPage.content;
        this.totalElements = oPage['totalElements'];
        this.totalPages = oPage['totalPages'];
        this.paginationPad = this.paginationService.pagination(this.totalPages, this.currentPageIndex);
        this.currentPageSize = oPage['size'];
        this.currentPageIndex = pageNumber;
        this._snackBar.dismiss();
      }
      this.loading = false;      
    }, error => {
      if (error.status == 401) {
        //se ha perdido la sesión        
        this.openSnackBar("Su sesión ha expirado. Por favor debe volver a autenticarse en la página de login.", "ERROR DE SESIÓN");
        localStorage.clear();
        if (this.oRouter !== undefined) {
          this.oRouter.navigate(['/login']);
        }
      } else {
        //servidor caido
        this.openSnackBar("Hay algún problema técnico con el servidor en Internet. Por favor avise al técnico de la aplicación.", "ERROR DE SERVIDOR");
        localStorage.clear();
        if (this.oRouter !== undefined) {
          this.oRouter.navigate(['/home']);
        }
      }
      this.loading = false;      
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 9000,
    });
  }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

  onSubmitFindForm() {    
    this.oRouter.navigate(['/producto/plist/', this.currentPageIndex, this.currentPageSize, this.currentSortField || "", this.currentSortDirection || "", this.currentFilter || ""]);
  }

}
