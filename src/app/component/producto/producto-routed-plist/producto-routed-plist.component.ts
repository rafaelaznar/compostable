import { Component, OnInit, ViewChild } from '@angular/core';
import { IPage, IProducto, Page, Producto } from 'src/app/model/model-interfaces';
import { ProductoService } from 'src/app/service/producto.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-producto-routed-plist',
  templateUrl: './producto-routed-plist.component.html',
  styleUrls: ['./producto-routed-plist.component.css']
})

export class ProductoRoutedPlistComponent implements OnInit {
  currentSort: Sort | undefined = undefined;
  totalElements: number = 0;
  totalPages: number = 0;
  pageIndex: number = 0;
  pageSize: number = 10;
  page: IPage = new Page();
  Products: IProducto[] | undefined;
  columnas: string[] = ['id', 'nombre', 'codigo', 'precio', 'existencias', 'tipo', 'herramientas'];
  loading: boolean = false;
  oRouter: Router | undefined;

  //new MatTableDataSource(<IProducto> response);
  dataSource: MatTableDataSource<IProducto> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  //@ViewChild(MatSort) sort: MatSort | undefined;

  getPage = (pageNumber: number, rpp: number, sort: Sort | undefined = undefined, filter: string | undefined = undefined) => {
    this.loading = true;
    this.productoService.getProductos(pageNumber, rpp, sort, filter).subscribe((oPage: IPage) => {
      this.page = oPage;
      this.Products = oPage.content;
      this.totalElements = oPage['totalElements'];
      this.totalPages = oPage['totalPages'];
      this.dataSource = new MatTableDataSource(oPage.content);
      //console.log(this.dataSource);   
      this.pageSize = oPage['size'];
      this.pageIndex = pageNumber;
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

  nextPage(event: PageEvent) {
    this.getPage(event.pageIndex, event.pageSize, this.currentSort, this.strToFind);
  }

  constructor(private productoService: ProductoService, private router: Router, private _location: Location, private _snackBar: MatSnackBar) {
    this.oRouter = router;
    this.getPage(this.pageIndex, this.pageSize, this.currentSort, this.strToFind);
  }

  ngOnInit() {
  }

  goToDetails(cod: number) {
    this.router.navigate(['/producto-detail/', cod]);
  }

  goBack() {
    this._location.back();
  }

  strToFind: string | undefined = undefined;
  onSubmitFindForm() {
    //console.log(this.strToFind);
    this.getPage(0, this.pageSize, this.currentSort, this.strToFind);
  }

  sortData(sort: Sort) {
    console.log("sorting");
    this.currentSort = sort;
    this.getPage(this.pageIndex, this.pageSize, sort, this.strToFind);
  }

}
