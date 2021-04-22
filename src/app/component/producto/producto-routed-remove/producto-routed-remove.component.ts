import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto, objectElement, Producto } from 'src/app/model/model-interfaces';
import { ProductoService } from 'src/app/service/producto.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/service/snackbar.service';

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
    private oSnackbarService: SnackbarService,
    private oRouter: Router,
    private actRoute: ActivatedRoute,
    private productoService: ProductoService,
    private _snackBar: MatSnackBar,
    private _location: Location) {
    this.entityId = Number(this.actRoute.snapshot.params.id);
    if (this.entityId) {
      this.get();
    } else {
      this.oSnackbarService.openSnackBar("No se puede obtener la entidad porque no se ha comunicado el id.", "ERROR DE URL EN CLIENTE");
    }
  }

  get = () => {
    this.loading = true;
    this.productoService.getProducto(this.entityId).subscribe((producto: IProducto) => {
      this.entityData = producto;
      this.loading = false;
    }, error => {
      if (error.status == 401) {
        //se ha perdido la sesión        
        this.oSnackbarService.openSnackBar("Su sesión ha expirado. Por favor, debe volver a autenticarse en la página de login.", "ERROR DE SESIÓN");
        localStorage.clear();
        if (this.oRouter !== undefined) {
          this.oRouter.navigate(['/login']);
        }
      } else {
        //servidor caido
        this.oSnackbarService.openSnackBar("Hay algún problema técnico con el servidor en Internet. Por favor, avise al técnico de la aplicación.", "ERROR DE SERVIDOR");
        localStorage.clear();
        if (this.oRouter !== undefined) {
          this.oRouter.navigate(['/home']);
        }
      }
      this.loading = false;
    })
  }

  remove = () => {
    this.loading = true;
    console.log("pre-remove de producto", this.entityId);
    this.productoService.removeProducto(this.entityId).subscribe((result: number) => {
      console.log("remove de producto", result);
      if (result === 0) {
        this.oSnackbarService.openSnackBar(this.entityName + " " + this.entityId + ": Ha sido borrado.", "OK", "back", 3000);
      } else {
        this.oSnackbarService.openSnackBar(this.entityName + " " + this.entityId + ": No se ha podido borrar.", "ERROR DE SERVIDOR");
      }
      this.loading = false;
      //this._snackBar.dismiss();      
    }, error => {
      if (error.status == 401) {
        //se ha perdido la sesión        
        this.oSnackbarService.openSnackBar("Su sesión ha expirado. Por favor debe volver a autenticarse en la página de login.", "ERROR DE SESIÓN");
        //localStorage.clear();
        if (this.oRouter !== undefined) {
          this.oRouter.navigate(['/login']);
        }
      } else {
        //servidor caido
        this.oSnackbarService.openSnackBar("Hay algún problema técnico con el servidor en Internet. Por favor avise al técnico de la aplicación.", "ERROR DE SERVIDOR");
        localStorage.clear();
        if (this.oRouter !== undefined) {
          this.oRouter.navigate(['/home']);
        }
      }
      this.loading = false;
    })
  }

  ngOnInit() {
  }

  goBack = () => this._location.back();

}