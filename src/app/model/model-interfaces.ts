// from https://transform.tools/json-to-typescript

/*
export interface ISessionResolved {
    user: IUsuario | null;
    isError: boolean;
    error: string;
}

export class CSessionResolved implements ISessionResolved {
    user: IUsuario | null = null;
    isError: boolean = true;
    error: string = "";
    constructor(isError: boolean, error?: any, user?: IUsuario,) {
        this.error = error || "";
        this.user = user || null;
        this.isError = isError;
    }
}
*/
export interface ITipousuario {
    id: number;
    nombre: string;
    usuarios: number;
}

export class Tipousuario implements ITipousuario {
    id: number = 0;
    nombre: string = "";
    usuarios: number = 0;
    constructor(id: number) {
        this.id = id;
    }
}

export interface IUsuario {
    id: number;
    dni: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    login: string;
    email: string;
    descuento: number;
    tipousuario: ITipousuario;
    facturas: number;
    carritos: number;
}


export class Usuario implements IUsuario {
    id: number = 0;
    dni: string = '';
    nombre: string = '';
    apellido1: string = '';
    apellido2: string = '';
    login: string = '';
    email: string = '';
    descuento: number = 0;
    facturas: number = 0;
    carritos: number = 0;
    tipousuario: ITipousuario = new Tipousuario(0);
}

export interface ILogin {
    login: string;
    password: string;
}



export interface objectElement {
    name: string;
    value: string;
}

export interface IProducto {
    id: number
    codigo: string
    nombre: string
    existencias: number
    precio: number
    imagen: number
    descuento: number
    tipoproducto: ITipoproducto
    compras: number
    carritos: number
}

export interface ITipoproducto {
    id: number
    nombre: string
    productos: number
}

export class Tipoproducto implements ITipoproducto {
    id: number = 0;
    nombre: string = "";
    productos: number = 0;
    constructor(id: number) {
        this.id = id;
    }
}

export class Producto implements IProducto {
    id: number = 0;
    codigo: string = "";
    nombre: string = "";
    existencias: number = 0;
    precio: number = 0;
    imagen: number = 0;
    descuento: number = 0;
    compras: number = 0;
    carritos: number = 0;
    tipoproducto = new Tipoproducto(0);
    constructor(id: number) {
        this.id = id;
    }
}

export interface IPage {
    content: IProducto[]
    pageable: IPageable
    totalPages: number
    totalElements: number
    last: boolean
    size: number
    number: number
    sort: ISort
    first: boolean
    numberOfElements: number
    empty: boolean
}

export class Page implements IPage {
    content = [];
    pageable = new Pageable();
    totalPages = 0;
    totalElements = 0;
    last = true;
    size = 0;
    number = 0;
    sort = new Sort();
    first = true;
    numberOfElements = 0;
    empty = true;
}

export interface IPageable {
    sort: ISort
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    unpaged: boolean
}

export class Pageable implements IPageable {
    sort = new Sort();
    offset = 0;
    pageNumber = 0;
    pageSize = 0;
    paged = false;
    unpaged = false;
}

export interface ISort {
    sorted: boolean
    unsorted: boolean
    empty: boolean
}

export class Sort implements ISort {
    sorted = true;
    unsorted = false;
    empty = true;
}

