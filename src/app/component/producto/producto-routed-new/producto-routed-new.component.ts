import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { IProducto, Producto } from 'src/app/model/model-interfaces';
import { ProductoService } from 'src/app/service/producto.service';
import { SnackbarService } from 'src/app/service/snackbar.service';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto-routed-new',
  templateUrl: './producto-routed-new.component.html',
  styleUrls: ['./producto-routed-new.component.css']
})
export class ProductoRoutedNewComponent implements OnInit {
  entityName: String = "producto";
  entitiesName: String = "productos";

  loading: boolean = false;

  oProducto: IProducto | undefined;

  oForm = this.fb.group({
    codigo: ['', [Validators.required, Validators.minLength(5)]],
    nombre: ['', Validators.required],
    existencias: ['', Validators.required],
    precio: ['', Validators.required],
    descuento: ['', Validators.required],
    tipoproducto: ['', Validators.required]
  });

  constructor(
    //private oSnackbarService: SnackbarService,
    //private oRouter: Router,
    //private actRoute: ActivatedRoute,
    //private productoService: ProductoService,
    //private _snackBar: MatSnackBar,
    //private _location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {    
  }

  onSubmit(): void {
    if (this.oForm) {
      const oFormData = {
        codigo: this.oForm.value.codigo,
        nombre: this.oForm.value.nombre,
        existencias: this.oForm.value.existencias,
        precio: this.oForm.value.precio,
        descuento: this.oForm.value.descuento,
        tipoproducto: this.oForm.value.tipoproducto
      }
      console.log(oFormData);
    }
  }
/*
  new = () => {
    this.loading = true;
    console.log("pre-new de producto", this.oProducto);
    this.productoService.newProducto(this.oProducto!).subscribe((oProductoResult: IProducto) => {
      console.log("new de producto", oProductoResult);
      if (oProductoResult === null) {
        this.oSnackbarService.openSnackBar(this.entityName + ": " + oProductoResult + ": Ha sido creado.", "OK", "back", 3000);
      } else {
        this.oSnackbarService.openSnackBar(this.entityName + ": " + oProductoResult + ": No se ha podido borrar.", "ERROR DE SERVIDOR");
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
  */

}
