import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto, objectElement, Producto } from 'src/app/model/model-interfaces';
import { ProductoService } from 'src/app/service/producto.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-producto-view',
  templateUrl: './producto-view.component.html',
  styleUrls: ['./producto-view.component.css']
})

export class ProductoViewComponent {

  @Input() id: number = 0;

  entityName: string = "Producto";

  entityData: IProducto | undefined;
  loading: boolean = false;

  constructor(
    private productoService: ProductoService,
    private _snackBar: MatSnackBar,
    private _location: Location) {
   
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
      } else {
        //servidor caido
        this.openSnackBar("Hay algún problema técnico con el servidor en Internet. Por favor avise al técnico de la aplicación.", "ERROR DE SERVIDOR");
        localStorage.clear();
      }
      this.loading = false;
    })
  }

  ngOnInit() {
    this.get(this.id);
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