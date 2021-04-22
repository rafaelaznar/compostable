import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto, objectElement, Producto } from 'src/app/model/model-interfaces';
import { ProductoService } from 'src/app/service/producto.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-producto-routed-view',
  templateUrl: './producto-routed-view.component.html',
  styleUrls: ['./producto-routed-view.component.css']
})

export class ProductoRoutedViewComponent {
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