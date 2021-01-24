import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPage, IProducto } from '../model/model-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  API_URL: string = "http://localhost:8082/";

  constructor(private httpClient: HttpClient) { }

  getProducto(id: number) {
    return this.httpClient.get<IProducto>(`${this.API_URL + 'producto'}/${id}`)
  }

  getProductos() {
    return this.httpClient.get<IPage>(`${this.API_URL + 'producto/page/'}`)
  }

}
