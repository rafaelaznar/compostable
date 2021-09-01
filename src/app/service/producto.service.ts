import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IPage, IProducto } from '../model/model-interfaces';
import { Sort } from '@angular/material/sort';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  sURL = this.oConfigService.API_URL + '/producto/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  constructor(
    private oConfigService: ConfigService,
    private httpClient: HttpClient
  ) { }

  newProducto = (oProducto: IProducto) => this.httpClient.post<IProducto>(this.sURL, oProducto, this.httpOptions);

  getProducto = (id: number) => this.httpClient.get<IProducto>(this.sURL + id, this.httpOptions);

  removeProducto = (id: number) => this.httpClient.delete<number>(this.sURL + id, this.httpOptions);

  getProductos(page: number, rpp: number, sort: Sort | undefined = undefined, filter: string | undefined = undefined) {
    let strRequest = this.sURL + 'page?page=' + page + '&size=' + rpp;
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
    return this.httpClient.get<IPage>(strRequest, this.httpOptions)
  }

  getProductosBootstrap(page: number, rpp: number, currentSortField: string, currentSortDirection: string, filter: string | undefined = undefined) {
    let strRequest = this.sURL + 'page?page=' + page + '&size=' + rpp;
    if (filter) {
      strRequest += "&filter=" + filter;
    }
    if (currentSortField) {
      strRequest += "&sort=" + currentSortField;
      if (currentSortDirection) {
        strRequest += "," + currentSortDirection;
      } else {
        strRequest += ",asc";
      }
    }

    return this.httpClient.get<IPage>(strRequest, this.httpOptions)
  }

}
