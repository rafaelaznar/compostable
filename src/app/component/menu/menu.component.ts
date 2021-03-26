import { Component, OnInit } from '@angular/core';
import { IUsuario, Usuario } from './../../model/model-interfaces';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  oUsuarioSession: IUsuario | null = null;
  constructor(private router: Router) {
    console.log("menu component");
    this.oUsuarioSession = JSON.parse(localStorage.getItem("user") || '{}');
    console.log("-->", this.oUsuarioSession);



  }

  ngOnInit() {
  }

}
