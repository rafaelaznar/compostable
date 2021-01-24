import { Component, OnInit, ViewChild } from '@angular/core';
import { IPage, IProducto, Page, Producto } from 'src/app/model/model-interfaces';
import { ProductoService } from 'src/app/service/producto.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-producto-plist',
  templateUrl: './producto-plist.component.html',
  styleUrls: ['./producto-plist.component.css']
})

export class ProductsComponent implements OnInit {

  page: IPage = new Page();
  Products: IProducto[] | undefined;
  columnas: string[] = ['id', 'nombre', 'codigo', 'precio', 'herramientas'];

  //new MatTableDataSource(<IProducto> response);
  dataSource: MatTableDataSource<IProducto> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private productoService: ProductoService, private router: Router, private _location: Location) {
    this.productoService.getProductos().subscribe((page: IPage) => {
      this.page = page;
      this.Products = page.content;
      this.dataSource = new MatTableDataSource(page.content);
      console.log(this.dataSource);
    })
  }

  ngOnInit() {
  }

  goToDetails(cod: number) {
    this.router.navigate(['/producto-detail/', cod]);
  }

  goBack() {
    this._location.back();
  }

}
