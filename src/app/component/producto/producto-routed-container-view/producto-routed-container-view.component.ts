import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto, objectElement, Producto } from 'src/app/model/model-interfaces';
import { ProductoService } from 'src/app/service/producto.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-producto-routed-container-view',
  templateUrl: './producto-routed-container-view.component.html',
  styleUrls: ['./producto-routed-container-view.component.css']
})

export class ProductoRoutedContainerViewComponent {
  entityName: string = "Producto";
  entityId: number;
  entityData: IProducto | undefined;
  loading: boolean = false;

  constructor(
    private oRouter: Router,
    private actRoute: ActivatedRoute,
    private productoService: ProductoService,
    private _snackBar: MatSnackBar,
    private _location: Location) {
    this.entityId = Number(this.actRoute.snapshot.params.id);
  }

 
  goBack() {
    this._location.back();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 9000,
    });
  }
}