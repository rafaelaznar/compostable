import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPage, IProducto } from '../model/model-interfaces';
import { Sort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  API_URL: string = "http://localhost:8082/";

  constructor(private httpClient: HttpClient) { }

  getProducto(id: number) {
    return this.httpClient.get<IProducto>(`${this.API_URL + 'producto'}/${id}`)
  }

  getProductos(page: number, rpp: number, sort: Sort | undefined = undefined, filter: string | undefined = undefined) {
    let strRequest = `${this.API_URL + 'producto/page?page=' + page + '&size=' + rpp}`;
    if (filter) {
      strRequest += "&filter=" + filter;
    }
    if (sort) {
      if (sort.active) {
        strRequest += "&sort=" + sort.active;
        if (sort.direction) {
          strRequest += "," + sort.direction;
        } else {
          strRequest += ",asc";
        }
      }
    }
    return this.httpClient.get<IPage>(strRequest)
  }

}
