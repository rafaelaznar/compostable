import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto, objectElement, Producto } from 'src/app/model/model-interfaces';
import { ProductoService } from 'src/app/service/producto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})

export class ProductDetailComponent {
  product_id: number;
  product: Producto = new Producto(0);
  displayedColumns: string[] = ['name', 'value'];
  dataSource: objectElement[] = [];

  constructor(private actRoute: ActivatedRoute, private productoService: ProductoService, private _location: Location) {
    this.product_id = Number(this.actRoute.snapshot.params.id);
  }

  processProductoFromJSON = (product: Producto): objectElement[] =>
    Object.entries(product).map(obj => {
      switch (obj[0]) {
        case 'id': {
          return { name: 'Id:', value: obj[1] };
          break;
        }
        case 'codigo': {
          return { name: 'Código:', value: obj[1] };
          break;
        }
        case 'nombre': {
          return { name: 'Nombre:', value: obj[1] };
          break;
        }
        case 'existencias': {
          return { name: 'Existencias:', value: JSON.stringify(obj[1]) + ' unidades' };
          break;
        }
        case 'precio': {
          return { name: 'Precio:', value: JSON.stringify(obj[1]) + ' €' };
          break;
        }
        case 'imagen': {
          return { name: 'Código de imagen:', value: JSON.stringify(obj[1]) };
          break;
        }
        case 'descuento': {
          return { name: 'Descuento:', value: JSON.stringify(obj[1]) + ' %' };
          break;
        }
        case 'tipoproducto': {
          return { name: "Tipo de producto:", value: obj[1].nombre + ' (id=' + obj[1].id + ')' };
          break;
        }
        case 'compras': {
          return { name: 'Este producto ha sido comprado:', value: JSON.stringify(obj[1]) + ' veces' };
          break;
        }
        case 'carritos': {
          return { name: 'Este producto está en el carrito de:', value: JSON.stringify(obj[1]) + ' clientes' };
          break;
        }
        default: {
          return { name: obj[0], value: JSON.stringify(obj[1]) };
          break;
        }
      }
    })

  ngOnInit() {
    this.productoService.getProducto(this.product_id).subscribe((producto: IProducto) => {
      this.product = producto;
      this.dataSource = this.processProductoFromJSON(producto);
    })
  }

  goBack() {
    this._location.back();
  }
}