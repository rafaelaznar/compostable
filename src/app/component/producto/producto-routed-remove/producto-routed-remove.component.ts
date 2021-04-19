import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto, objectElement, Producto } from 'src/app/model/model-interfaces';
import { ProductoService } from 'src/app/service/producto.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-producto-routed-remove',
  templateUrl: './producto-routed-remove.component.html',
  styleUrls: ['./producto-routed-remove.component.css']
})

export class ProductoRoutedRemoveComponent {
  entityName: string = "Producto";
  entityId: number;
  entityData: IProducto | undefined;
  loading: boolean = false;

  constructor(
    private actRoute: ActivatedRoute,
    private productoService: ProductoService,
    private _snackBar: MatSnackBar,
    private _location: Location) {
    this.entityId = Number(this.actRoute.snapshot.params.id);
    if (this.entityId) {
      this.get(this.entityId);
    } else {
      this.openSnackBar("No se puede obtener la entidad porque no se ha comunicado el id.", "ERROR DE URL EN CLIENTE");
    }
  }

  get = (id: number) => {
    this.loading = true;
    this.productoService.getProducto(id).subscribe((producto: IProducto) => {
      this.entityData = producto;
      this.loading = false;
    })
  }

  ngOnInit() {
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