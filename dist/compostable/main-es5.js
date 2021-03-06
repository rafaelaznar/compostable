(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+7nu":
    /*!*********************************************!*\
      !*** ./src/app/service/producto.service.ts ***!
      \*********************************************/

    /*! exports provided: ProductoService */

    /***/
    function nu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoService", function () {
        return ProductoService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./config.service */
      "LWby");

      var ProductoService = /*#__PURE__*/function () {
        function ProductoService(oConfigService, httpClient) {
          var _this = this;

          _classCallCheck(this, ProductoService);

          this.oConfigService = oConfigService;
          this.httpClient = httpClient;
          this.sURL = this.oConfigService.API_URL + '/producto/';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            }),
            withCredentials: true
          };

          this.newProducto = function (oProducto) {
            return _this.httpClient.post(_this.sURL, oProducto, _this.httpOptions);
          };

          this.getProducto = function (id) {
            return _this.httpClient.get(_this.sURL + id, _this.httpOptions);
          };

          this.removeProducto = function (id) {
            return _this.httpClient["delete"](_this.sURL + id, _this.httpOptions);
          };
        }

        _createClass(ProductoService, [{
          key: "getProductos",
          value: function getProductos(page, rpp) {
            var sort = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
            var filter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
            var strRequest = this.sURL + 'page?page=' + page + '&size=' + rpp;

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

            return this.httpClient.get(strRequest, this.httpOptions);
          }
        }, {
          key: "getProductosBootstrap",
          value: function getProductosBootstrap(page, rpp, currentSortField, currentSortDirection) {
            var filter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var strRequest = this.sURL + 'page?page=' + page + '&size=' + rpp;

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

            return this.httpClient.get(strRequest, this.httpOptions);
          }
        }]);

        return ProductoService;
      }();

      ProductoService.??fac = function ProductoService_Factory(t) {
        return new (t || ProductoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ProductoService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ProductoService,
        factory: ProductoService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductoService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/rafa/compostable/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0ZDr":
    /*!*****************************************************************************!*\
      !*** ./src/app/component/producto/producto-view/producto-view.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ProductoViewComponent */

    /***/
    function ZDr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoViewComponent", function () {
        return ProductoViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/service/producto.service */
      "+7nu");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ProductoViewComponent = /*#__PURE__*/function () {
        function ProductoViewComponent(productoService, _snackBar, _location) {
          var _this2 = this;

          _classCallCheck(this, ProductoViewComponent);

          this.productoService = productoService;
          this._snackBar = _snackBar;
          this._location = _location;
          this.id = 0;
          this.entityName = "Producto";
          this.loading = false;

          this.get = function (id) {
            _this2.loading = true;

            _this2.productoService.getProducto(id).subscribe(function (producto) {
              _this2.entityData = producto;
              _this2.loading = false;
            }, function (error) {
              if (error.status == 401) {
                //se ha perdido la sesi??n        
                _this2.openSnackBar("Su sesi??n ha expirado. Por favor debe volver a autenticarse en la p??gina de login.", "ERROR DE SESI??N");

                localStorage.clear();
              } else {
                //servidor caido
                _this2.openSnackBar("Hay alg??n problema t??cnico con el servidor en Internet. Por favor avise al t??cnico de la aplicaci??n.", "ERROR DE SERVIDOR");

                localStorage.clear();
              }

              _this2.loading = false;
            });
          };
        }

        _createClass(ProductoViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.get(this.id);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this._location.back();
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            this._snackBar.open(message, action, {
              duration: 9000
            });
          }
        }]);

        return ProductoViewComponent;
      }();

      ProductoViewComponent.??fac = function ProductoViewComponent_Factory(t) {
        return new (t || ProductoViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_1__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
      };

      ProductoViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductoViewComponent,
        selectors: [["app-producto-view"]],
        inputs: {
          id: "id"
        },
        decls: 49,
        vars: 13,
        consts: [[1, "loader", 3, "hidden"], [1, "container", 2, "margin-top", "90px", 3, "hidden"], [1, "row"], [1, "col"], [1, "d-flex", "justify-content-center"], ["height", "100", 3, "src"], [1, "row", "mt-5"], [1, "col", "text-left"], [1, "table", "table-striped", "table-sm"], [3, "href"]],
        template: function ProductoViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "C\xF3digo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Existencias");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Descuento");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Tipo de producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "http://localhost:8082/file/", ctx.entityData == null ? null : ctx.entityData.imagen, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.codigo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.existencias);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.entityData == null ? null : ctx.entityData.precio, " \u20AC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.entityData == null ? null : ctx.entityData.descuento, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "tipoproducto/view/", ctx.entityData == null ? null : ctx.entityData.tipoproducto == null ? null : ctx.entityData.tipoproducto.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.tipoproducto == null ? null : ctx.entityData.tipoproducto.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "producto/tipoproducto////", ctx.entityData == null ? null : ctx.entityData.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("(", ctx.entityData == null ? null : ctx.entityData.tipoproducto == null ? null : ctx.entityData.tipoproducto.productos, " productos)");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0by12aWV3LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductoViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-producto-view',
            templateUrl: './producto-view.component.html',
            styleUrls: ['./producto-view.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_1__["ProductoService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    1:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "5XD3":
    /*!*********************************************************************************************!*\
      !*** ./src/app/component/producto/producto-routed-plist/producto-routed-plist.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ProductoRoutedPlistComponent */

    /***/
    function XD3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoRoutedPlistComponent", function () {
        return ProductoRoutedPlistComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_model_model_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/model/model-interfaces */
      "HcIn");
      /* harmony import */


      var src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/producto.service */
      "+7nu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/pagination.service */
      "c8VH");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../menu/menu.component */
      "zu+5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      function ProductoRoutedPlistComponent_span_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Filtro: \"", ctx_r0.initialFilter, "\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate5"]("href", "", ctx_r0.entityName, "/plist/", ctx_r0.currentPageIndex, "/", ctx_r0.currentPageSize, "/", ctx_r0.currentSortField, "/", ctx_r0.currentSortDirection, "/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function ProductoRoutedPlistComponent_li_36_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var p_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate6"]("href", "", ctx_r32.entityName, "/plist/", p_r31, "/", ctx_r32.currentPageSize, "/", ctx_r32.currentSortField, "/", ctx_r32.currentSortDirection, "/", ctx_r32.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](p_r31);
        }
      }

      function ProductoRoutedPlistComponent_li_36_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var p_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](p_r31);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function ProductoRoutedPlistComponent_li_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductoRoutedPlistComponent_li_36_a_1_Template, 2, 7, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProductoRoutedPlistComponent_li_36_span_2_Template, 2, 1, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var p_r31 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c0, ctx_r1.currentPageIndex + "" == p_r31));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", p_r31 != "...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", p_r31 == "...");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "text-white": a0
        };
      };

      function ProductoRoutedPlistComponent_a_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r2.entityName, "/plist/", ctx_r2.currentPageIndex, "/", ctx_r2.currentPageSize, "/id/desc/", ctx_r2.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r2.currentSortField == "id"));
        }
      }

      function ProductoRoutedPlistComponent_a_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r3.entityName, "/plist/", ctx_r3.currentPageIndex, "/", ctx_r3.currentPageSize, "/id/asc/", ctx_r3.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r3.currentSortField == "id"));
        }
      }

      function ProductoRoutedPlistComponent_i_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 46);
        }
      }

      function ProductoRoutedPlistComponent_i_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 47);
        }
      }

      function ProductoRoutedPlistComponent_a_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "c\xF3digo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r6.entityName, "/plist/", ctx_r6.currentPageIndex, "/", ctx_r6.currentPageSize, "/codigo/desc/", ctx_r6.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r6.currentSortField == "codigo"));
        }
      }

      function ProductoRoutedPlistComponent_a_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "c\xF3digo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r7.entityName, "/plist/", ctx_r7.currentPageIndex, "/", ctx_r7.currentPageSize, "/codigo/asc/", ctx_r7.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r7.currentSortField == "codigo"));
        }
      }

      function ProductoRoutedPlistComponent_i_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 46);
        }
      }

      function ProductoRoutedPlistComponent_i_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 47);
        }
      }

      function ProductoRoutedPlistComponent_a_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "nombre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r10.entityName, "/plist/", ctx_r10.currentPageIndex, "/", ctx_r10.currentPageSize, "/nombre/desc/", ctx_r10.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r10.currentSortField == "nombre"));
        }
      }

      function ProductoRoutedPlistComponent_a_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "nombre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r11.entityName, "/plist/", ctx_r11.currentPageIndex, "/", ctx_r11.currentPageSize, "/nombre/asc/", ctx_r11.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r11.currentSortField == "nombre"));
        }
      }

      function ProductoRoutedPlistComponent_i_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 46);
        }
      }

      function ProductoRoutedPlistComponent_i_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 47);
        }
      }

      function ProductoRoutedPlistComponent_a_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "tipo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r14.entityName, "/plist/", ctx_r14.currentPageIndex, "/", ctx_r14.currentPageSize, "/tipoproducto/desc/", ctx_r14.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r14.currentSortField == "tipoproducto"));
        }
      }

      function ProductoRoutedPlistComponent_a_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "tipo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r15.entityName, "/plist/", ctx_r15.currentPageIndex, "/", ctx_r15.currentPageSize, "/tipoproducto/asc/", ctx_r15.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r15.currentSortField == "tipoproducto"));
        }
      }

      function ProductoRoutedPlistComponent_i_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 46);
        }
      }

      function ProductoRoutedPlistComponent_i_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 47);
        }
      }

      function ProductoRoutedPlistComponent_a_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "existencias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r18.entityName, "/plist/", ctx_r18.currentPageIndex, "/", ctx_r18.currentPageSize, "/existencias/desc/", ctx_r18.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r18.currentSortField == "existencias"));
        }
      }

      function ProductoRoutedPlistComponent_a_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "existencias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r19.entityName, "/plist/", ctx_r19.currentPageIndex, "/", ctx_r19.currentPageSize, "/existencias/asc/", ctx_r19.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r19.currentSortField == "existencias"));
        }
      }

      function ProductoRoutedPlistComponent_i_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 46);
        }
      }

      function ProductoRoutedPlistComponent_i_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 47);
        }
      }

      function ProductoRoutedPlistComponent_a_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "precio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r22.entityName, "/plist/", ctx_r22.currentPageIndex, "/", ctx_r22.currentPageSize, "/precio/desc/", ctx_r22.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r22.currentSortField == "precio"));
        }
      }

      function ProductoRoutedPlistComponent_a_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "precio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r23.entityName, "/plist/", ctx_r23.currentPageIndex, "/", ctx_r23.currentPageSize, "/precio/asc/", ctx_r23.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r23.currentSortField == "precio"));
        }
      }

      function ProductoRoutedPlistComponent_i_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 46);
        }
      }

      function ProductoRoutedPlistComponent_i_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 47);
        }
      }

      function ProductoRoutedPlistComponent_a_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "descuento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r26.entityName, "/plist/", ctx_r26.currentPageIndex, "/", ctx_r26.currentPageSize, "/descuento/desc/", ctx_r26.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r26.currentSortField == "descuento"));
        }
      }

      function ProductoRoutedPlistComponent_a_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "descuento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate4"]("href", "", ctx_r27.entityName, "/plist/", ctx_r27.currentPageIndex, "/", ctx_r27.currentPageSize, "/descuento/asc/", ctx_r27.currentFilter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx_r27.currentSortField == "descuento"));
        }
      }

      function ProductoRoutedPlistComponent_i_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 46);
        }
      }

      function ProductoRoutedPlistComponent_i_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 47);
        }
      }

      function ProductoRoutedPlistComponent_tr_87_a_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var fila_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("href", "compra/", ctx_r37.entityName, "////", fila_r36.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](fila_r36.compras);
        }
      }

      function ProductoRoutedPlistComponent_tr_87_a_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var fila_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("href", "carrito/", ctx_r38.entityName, "////", fila_r36.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](fila_r36.carritos);
        }
      }

      function ProductoRoutedPlistComponent_tr_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ProductoRoutedPlistComponent_tr_87_a_23_Template, 2, 3, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ProductoRoutedPlistComponent_tr_87_a_25_Template, 2, 3, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var fila_r36 = ctx.$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](fila_r36.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", fila_r36.codigo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](fila_r36.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "tipoproducto/view/", fila_r36.tipoproducto.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](fila_r36.tipoproducto.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "producto/tipoproducto////", fila_r36.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("(", fila_r36.tipoproducto.productos, " productos)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 19, fila_r36.existencias));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", fila_r36.precio, " \u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", fila_r36.descuento, " %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "http://localhost:8082/file/", fila_r36.imagen, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", fila_r36.compras > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", fila_r36.carritos > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("href", "", ctx_r30.entityName, "/view/", fila_r36.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("href", "", ctx_r30.entityName, "/edit/", fila_r36.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("href", "", ctx_r30.entityName, "/remove/", fila_r36.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      var _c2 = function _c2() {
        return ["/producto/new"];
      };

      var _c3 = function _c3(a0, a1) {
        return {
          "bg-primary": a0,
          "text-white": a1
        };
      };

      var _c4 = function _c4() {
        return ["/home"];
      };

      var ProductoRoutedPlistComponent = /*#__PURE__*/function () {
        function ProductoRoutedPlistComponent(productoService, oRouter, oActivatedRoute, _location, _snackBar, paginationService) {
          var _this3 = this;

          _classCallCheck(this, ProductoRoutedPlistComponent);

          this.productoService = productoService;
          this.oRouter = oRouter;
          this.oActivatedRoute = oActivatedRoute;
          this._location = _location;
          this._snackBar = _snackBar;
          this.paginationService = paginationService;
          this.entityName = "producto";
          this.entitiesName = "productos";
          this.currentPageIndex = 0;
          this.currentPageSize = 10;
          this.currentSortField = "id";
          this.currentSortDirection = "asc";
          this.initialFilter = "";
          this.currentFilter = "";
          this.totalElements = 0;
          this.totalPages = 0;
          this.page = new src_app_model_model_interfaces__WEBPACK_IMPORTED_MODULE_1__["Page"]();
          this.loading = false;
          this.paginationPad = [];

          this.getPage = function (pageNumber, rpp, sortField, sortDirection) {
            var filter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

            _this3._snackBar.open("Cargando datos", "Por favor espera...");

            _this3.loading = true;

            _this3.productoService.getProductosBootstrap(pageNumber - 1, rpp, sortField, sortDirection, filter).subscribe(function (oPage) {
              if (pageNumber > oPage['totalPages']) {
                pageNumber = oPage['totalPages'];

                _this3.productoService.getProductosBootstrap(pageNumber - 1, rpp, sortField, sortDirection, filter).subscribe(function (oPage) {
                  _this3.page = oPage;
                  _this3.entities = oPage.content;
                  _this3.totalElements = oPage['totalElements'];
                  _this3.totalPages = oPage['totalPages'];
                  _this3.paginationPad = _this3.paginationService.pagination(_this3.totalPages, _this3.currentPageIndex);
                  _this3.currentPageSize = oPage['size'];
                  _this3.currentPageIndex = pageNumber;

                  _this3._snackBar.dismiss();
                }, function (error) {
                  if (error.status == 401) {
                    //se ha perdido la sesi??n        
                    _this3.openSnackBar("Su sesi??n ha expirado. Por favor debe volver a autenticarse en la p??gina de login.", "ERROR DE SESI??N");

                    localStorage.clear();

                    if (_this3.oRouter !== undefined) {
                      _this3.oRouter.navigate(['/login']);
                    }
                  } else {
                    //servidor caido
                    _this3.openSnackBar("Hay alg??n problema t??cnico con el servidor en Internet. Por favor avise al t??cnico de la aplicaci??n.", "ERROR DE SERVIDOR");

                    localStorage.clear();

                    if (_this3.oRouter !== undefined) {
                      _this3.oRouter.navigate(['/home']);
                    }
                  }
                });
              } else {
                _this3.page = oPage;
                _this3.entities = oPage.content;
                _this3.totalElements = oPage['totalElements'];
                _this3.totalPages = oPage['totalPages'];
                _this3.paginationPad = _this3.paginationService.pagination(_this3.totalPages, _this3.currentPageIndex);
                _this3.currentPageSize = oPage['size'];
                _this3.currentPageIndex = pageNumber;

                _this3._snackBar.dismiss();
              }

              _this3.loading = false;
            }, function (error) {
              if (error.status == 401) {
                //se ha perdido la sesi??n        
                _this3.openSnackBar("Su sesi??n ha expirado. Por favor debe volver a autenticarse en la p??gina de login.", "ERROR DE SESI??N");

                localStorage.clear();

                if (_this3.oRouter !== undefined) {
                  _this3.oRouter.navigate(['/login']);
                }
              } else {
                //servidor caido
                _this3.openSnackBar("Hay alg??n problema t??cnico con el servidor en Internet. Por favor avise al t??cnico de la aplicaci??n.", "ERROR DE SERVIDOR");

                localStorage.clear();

                if (_this3.oRouter !== undefined) {
                  _this3.oRouter.navigate(['/home']);
                }
              }

              _this3.loading = false;
            });
          };

          oActivatedRoute.params.subscribe(function (val) {
            if (_this3.oActivatedRoute.snapshot.params.page) {
              _this3.currentPageIndex = Number(_this3.oActivatedRoute.snapshot.params.page);

              if (_this3.currentPageIndex <= 0) {
                _this3.currentPageIndex = 1;
              }
            } else {
              _this3.currentPageIndex = 1;
            }

            if (_this3.oActivatedRoute.snapshot.params.rpp) {
              _this3.currentPageSize = Number(_this3.oActivatedRoute.snapshot.params.rpp);

              if (_this3.currentPageSize > 100) {
                _this3.currentPageSize = 100;
              }
            } else {
              _this3.currentPageSize = 10;
            }

            _this3.currentSortField = _this3.oActivatedRoute.snapshot.params.sort;
            _this3.currentSortDirection = _this3.oActivatedRoute.snapshot.params.dir;
            _this3.initialFilter = _this3.oActivatedRoute.snapshot.params.filter;
            _this3.currentFilter = _this3.initialFilter;

            _this3.getPage(_this3.currentPageIndex, _this3.currentPageSize, _this3.currentSortField, _this3.currentSortDirection, _this3.currentFilter);
          });
        }

        _createClass(ProductoRoutedPlistComponent, [{
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            this._snackBar.open(message, action, {
              duration: 9000
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this._location.back();
          }
        }, {
          key: "onSubmitFindForm",
          value: function onSubmitFindForm() {
            this.oRouter.navigate(['/producto/plist/', this.currentPageIndex, this.currentPageSize, this.currentSortField || "", this.currentSortDirection || "", this.currentFilter || ""]);
          }
        }]);

        return ProductoRoutedPlistComponent;
      }();

      ProductoRoutedPlistComponent.??fac = function ProductoRoutedPlistComponent_Factory(t) {
        return new (t || ProductoRoutedPlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_6__["PaginationService"]));
      };

      ProductoRoutedPlistComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductoRoutedPlistComponent,
        selectors: [["app-producto-routed-plist"]],
        decls: 108,
        vars: 94,
        consts: [[1, "loader", 3, "hidden"], [1, "container-fluid", "px-5", 2, "margin-top", "90px", 3, "hidden"], [1, "row"], [1, "col"], [1, "d-flex", "justify-content-between"], [1, "fas", "fa-gift"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fas", "fa-plus-square"], [3, "submit"], ["matInput", "", "placeholder", "Introduce parte del nombre, del id o del c\xF3digo y pulsa enter", "name", "currentFilter", 3, "ngModel", "ngModelChange"], ["aria-label", "rpp"], [1, "pagination"], [1, "page-item", 3, "ngClass"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link", 3, "href"], [1, "badge", "badge-pill", "badge-primary"], ["class", "badge badge-pill badge-warning", 4, "ngIf"], ["aria-label", "pagination"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngFor$index", "ngForOf", "ngForTrack"], [1, "table", "table-bordered", "table-sm"], [1, "text-center", 3, "ngClass"], [3, "ngClass", "href", 4, "ngIf"], ["class", "fas fa-arrow-up", 4, "ngIf"], ["class", "fas fa-arrow-down", 4, "ngIf"], [1, "text-center"], [1, "text-center", 2, "width", "5%"], [4, "ngFor", "ngForOf"], [1, "control-group", "text-center"], [1, "controls"], [1, "btn", "btn-primary", "mr-2", 3, "routerLink"], [1, "fas", "fa-home"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-arrow-circle-left"], [1, "pt-3", "border-top", 2, "height", "80px"], [1, "col-12", "col-md"], [1, "text-muted"], ["href", "https://github.com/rafaelaznar/compostable"], [1, "fab", "fa-github"], ["href", "https://github.com/rafaelaznar/trolleyesSBserver"], [1, "badge", "badge-pill", "badge-warning"], [3, "href"], [1, "fas", "fa-times"], ["class", "page-link", 3, "href", 4, "ngIf"], ["class", "page-link", "disabled", "true", 4, "ngIf"], [1, "page-link", 3, "href"], ["disabled", "true", 1, "page-link"], [3, "ngClass", "href"], [1, "fas", "fa-arrow-up"], [1, "fas", "fa-arrow-down"], [1, "text-center", "bg-primary", "text-white", "font-weight-bold"], [1, "text-left", "font-weight-bold"], [1, "text-right"], ["height", "30", 3, "src"], [3, "href", 4, "ngIf"], [1, "col-md-12", "text-left"], ["role", "group", "aria-label", "Herramientas", 1, "btn-group"], [1, "btn", "btn-success", "btn-sm", 3, "href"], [1, "fas", "fa-eye"], [1, "btn", "btn-primary", "btn-sm", 3, "href"], [1, "fas", "fa-edit"], ["ng-if", "fila.carritos==0&&fila.facturas==0", 1, "btn", "btn-danger", "btn-sm", 3, "href"]],
        template: function ProductoRoutedPlistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function ProductoRoutedPlistComponent_Template_form_submit_11_listener() {
              return ctx.onSubmitFindForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductoRoutedPlistComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.currentFilter = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "nav", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "100");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, ProductoRoutedPlistComponent_span_33_Template, 4, 6, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "nav", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, ProductoRoutedPlistComponent_li_36_Template, 3, 5, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "table", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, ProductoRoutedPlistComponent_a_41_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, ProductoRoutedPlistComponent_a_42_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, ProductoRoutedPlistComponent_i_43_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, ProductoRoutedPlistComponent_i_44_Template, 1, 0, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, ProductoRoutedPlistComponent_a_46_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, ProductoRoutedPlistComponent_a_47_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, ProductoRoutedPlistComponent_i_48_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, ProductoRoutedPlistComponent_i_49_Template, 1, 0, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, ProductoRoutedPlistComponent_a_51_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, ProductoRoutedPlistComponent_a_52_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, ProductoRoutedPlistComponent_i_53_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, ProductoRoutedPlistComponent_i_54_Template, 1, 0, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, ProductoRoutedPlistComponent_a_56_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, ProductoRoutedPlistComponent_a_57_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, ProductoRoutedPlistComponent_i_58_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, ProductoRoutedPlistComponent_i_59_Template, 1, 0, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](61, ProductoRoutedPlistComponent_a_61_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, ProductoRoutedPlistComponent_a_62_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, ProductoRoutedPlistComponent_i_63_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](64, ProductoRoutedPlistComponent_i_64_Template, 1, 0, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, ProductoRoutedPlistComponent_a_66_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](67, ProductoRoutedPlistComponent_a_67_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, ProductoRoutedPlistComponent_i_68_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, ProductoRoutedPlistComponent_i_69_Template, 1, 0, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](71, ProductoRoutedPlistComponent_a_71_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](72, ProductoRoutedPlistComponent_a_72_Template, 2, 7, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](73, ProductoRoutedPlistComponent_i_73_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](74, ProductoRoutedPlistComponent_i_74_Template, 1, 0, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " imagen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " compras");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " carritos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " herramientas ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](87, ProductoRoutedPlistComponent_tr_87_Template, 36, 21, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, " Ir a home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductoRoutedPlistComponent_Template_a_click_93_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " Volver ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "footer", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "WILDCART \xA9 MIT licensed BY Rafael Aznar & DAW students, 2020 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, " CLIENT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, " SERVER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Listado de ", ctx.entitiesName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](65, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Filtrar ", ctx.entitiesName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.currentFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](66, _c0, ctx.currentPageSize == 10));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate5"]("href", "", ctx.entityName, "/plist/", ctx.currentPageIndex, "/10/", ctx.currentSortField, "/", ctx.currentSortDirection, "/", ctx.currentFilter, "/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](68, _c0, ctx.currentPageSize == 50));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate5"]("href", "", ctx.entityName, "/plist/", ctx.currentPageIndex, "/50/", ctx.currentSortField, "/", ctx.currentSortDirection, "/", ctx.currentFilter, "/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](70, _c0, ctx.currentPageSize == 100));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate5"]("href", "", ctx.entityName, "/plist/", ctx.currentPageIndex, "/100/", ctx.currentSortField, "/", ctx.currentSortDirection, "/", ctx.currentFilter, "/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.totalElements, " registros");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.initialFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.paginationPad)("ngForTrack", ctx.by);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](72, _c3, ctx.currentSortField == "id", ctx.currentSortField == "id"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "id" && ctx.currentSortDirection == "asc" || ctx.currentSortField != "id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "id" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "id" && ctx.currentSortDirection == "asc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "id" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](75, _c3, ctx.currentSortField == "codigo", ctx.currentSortField == "codigo"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "codigo" && ctx.currentSortDirection == "asc" || ctx.currentSortField != "codigo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "codigo" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "codigo" && ctx.currentSortDirection == "asc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "codigo" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](78, _c3, ctx.currentSortField == "nombre", ctx.currentSortField == "nombre"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "nombre" && ctx.currentSortDirection == "asc" || ctx.currentSortField != "nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "nombre" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "nombre" && ctx.currentSortDirection == "asc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "nombre" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](81, _c3, ctx.currentSortField == "tipoproducto", ctx.currentSortField == "tipoproducto"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "tipoproducto" && ctx.currentSortDirection == "asc" || ctx.currentSortField != "tipoproducto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "tipoproducto" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "tipoproducto" && ctx.currentSortDirection == "asc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "tipoproducto" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](84, _c3, ctx.currentSortField == "existencias", ctx.currentSortField == "existencias"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "existencias" && ctx.currentSortDirection == "asc" || ctx.currentSortField != "existencias");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "existencias" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "existencias" && ctx.currentSortDirection == "asc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "existencias" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](87, _c3, ctx.currentSortField == "precio", ctx.currentSortField == "precio"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "precio" && ctx.currentSortDirection == "asc" || ctx.currentSortField != "precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "precio" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "precio" && ctx.currentSortDirection == "asc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "precio" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](90, _c3, ctx.currentSortField == "descuento", ctx.currentSortField == "descuento"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "descuento" && ctx.currentSortDirection == "asc" || ctx.currentSortField != "descuento");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "descuento" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "descuento" && ctx.currentSortDirection == "asc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentSortField == "descuento" && ctx.currentSortDirection == "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.entities);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](93, _c4));
          }
        },
        directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0by1yb3V0ZWQtcGxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductoRoutedPlistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-producto-routed-plist',
            templateUrl: './producto-routed-plist.component.html',
            styleUrls: ['./producto-routed-plist.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }, {
            type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_6__["PaginationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8JTj":
    /*!*****************************************************************************************!*\
      !*** ./src/app/component/producto/producto-routed-new/producto-routed-new.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ProductoRoutedNewComponent */

    /***/
    function JTj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoRoutedNewComponent", function () {
        return ProductoRoutedNewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_service_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/snackbar.service */
      "nxnM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/producto.service */
      "+7nu");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../menu/menu.component */
      "zu+5");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      function ProductoRoutedNewComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Se debe introducir un c\xF3digo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductoRoutedNewComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " El c\xF3digo introducido es demasiado corto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-valid": a0
        };
      };

      var ProductoRoutedNewComponent = /*#__PURE__*/function () {
        function ProductoRoutedNewComponent(oSnackbarService, oRouter, //private actRoute: ActivatedRoute,
        productoService, //private _snackBar: MatSnackBar,
        //private _location: Location,
        fb) {
          var _this4 = this;

          _classCallCheck(this, ProductoRoutedNewComponent);

          this.oSnackbarService = oSnackbarService;
          this.oRouter = oRouter;
          this.productoService = productoService;
          this.fb = fb;
          this.entityName = "producto";
          this.entitiesName = "productos";
          this.loading = false;
          this.oForm = this.fb.group({
            codigo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            existencias: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            precio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(99999)],
            descuento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipoproducto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });

          this["new"] = function () {
            _this4.loading = true;
            console.log("pre-new de producto", _this4.oProducto);

            _this4.productoService.newProducto(_this4.oProducto).subscribe(function (oProductoResult) {
              console.log("new de producto", oProductoResult);

              if (oProductoResult) {
                _this4.oSnackbarService.openSnackBar("Ha sido creado el " + _this4.entityName + " con id = " + oProductoResult.id, "OK", "", 3000);

                _this4.oRouter.navigate(['/' + _this4.entityName + '/view/', oProductoResult.id]);
              } else {
                _this4.oSnackbarService.openSnackBar("No se ha podido crear el " + _this4.entityName + ".", "ERROR DE SERVIDOR");
              }

              _this4.loading = false; //this._snackBar.dismiss();      
            }, function (error) {
              if (error.status == 401) {
                //se ha perdido la sesi??n        
                _this4.oSnackbarService.openSnackBar("Su sesi??n ha expirado. Por favor debe volver a autenticarse en la p??gina de login.", "ERROR DE SESI??N"); //localStorage.clear();


                if (_this4.oRouter !== undefined) {
                  _this4.oRouter.navigate(['/login']);
                }
              } else {
                //servidor caido
                _this4.oSnackbarService.openSnackBar("Hay alg??n problema t??cnico con el servidor en Internet. Por favor avise al t??cnico de la aplicaci??n.", "ERROR DE SERVIDOR");

                localStorage.clear();

                if (_this4.oRouter !== undefined) {
                  _this4.oRouter.navigate(['/home']);
                }
              }

              _this4.loading = false;
            });
          };
        }

        _createClass(ProductoRoutedNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.oForm) {
              this.oProducto = {
                id: null,
                codigo: this.oForm.value.codigo,
                nombre: this.oForm.value.nombre,
                existencias: this.oForm.value.existencias,
                imagen: 1,
                precio: this.oForm.value.precio,
                descuento: this.oForm.value.descuento,
                tipoproducto: {
                  id: this.oForm.value.tipoproducto,
                  nombre: ""
                }
              };
              this["new"]();
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.oForm.controls;
          }
        }]);

        return ProductoRoutedNewComponent;
      }();

      ProductoRoutedNewComponent.??fac = function ProductoRoutedNewComponent_Factory(t) {
        return new (t || ProductoRoutedNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_snackbar_service__WEBPACK_IMPORTED_MODULE_2__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      ProductoRoutedNewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductoRoutedNewComponent,
        selectors: [["app-producto-routed-new"]],
        decls: 60,
        vars: 12,
        consts: [[1, "loader", 3, "hidden"], [1, "container-fluid", "px-5", 2, "margin-top", "90px", 3, "hidden"], [1, "row"], [1, "col"], [1, "d-flex", "justify-content-between"], [1, "fas", "fa-gift"], [1, "row", 2, "margin-top", "30px"], [1, "col-12", "mx-auto"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], ["for", "codigo", 1, "col-sm-2", "col-form-label"], [1, "col-sm-6"], ["type", "text", "id", "codigo", "formControlName", "codigo", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "nombre", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "id", "nombre", "formControlName", "nombre", 1, "form-control"], ["for", "existencias", 1, "col-sm-2", "col-form-label"], [1, "col-sm-4"], ["type", "number", "id", "existencias", "formControlName", "existencias", 1, "form-control"], ["for", "precio", 1, "col-sm-2", "col-form-label"], ["type", "number", "id", "precio", "formControlName", "precio", 1, "form-control"], ["for", "descuento", 1, "col-sm-2", "col-form-label"], ["type", "number", "id", "descuento", "formControlName", "descuento", 1, "form-control"], ["for", "tipoproducto", 1, "col-sm-2", "col-form-label"], ["type", "number", "id", "tipoproducto", "formControlName", "tipoproducto", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "pt-3", "border-top", 2, "height", "80px"], [1, "col-12", "col-md"], [1, "text-muted"], ["href", "https://github.com/rafaelaznar/compostable"], [1, "fab", "fa-github"], ["href", "https://github.com/rafaelaznar/trolleyesSBserver"], [1, "text-danger"]],
        template: function ProductoRoutedNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ProductoRoutedNewComponent_Template_form_ngSubmit_11_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "C\xF3digo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ProductoRoutedNewComponent_div_17_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ProductoRoutedNewComponent_div_18_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Existencias");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Descuento");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Tipo de producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "footer", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "WILDCART \xA9 MIT licensed BY Rafael Aznar & DAW students, 2020 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " CLIENT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " SERVER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Nuevo ", ctx.entityName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.oForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, ctx.f.codigo.dirty && !((ctx.f.codigo.errors == null ? null : ctx.f.codigo.errors.required) || (ctx.f.codigo.errors == null ? null : ctx.f.codigo.errors.minlength))));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.codigo.dirty && (ctx.f.codigo.errors == null ? null : ctx.f.codigo.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.codigo.dirty && (ctx.f.codigo.errors == null ? null : ctx.f.codigo.errors.minlength));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.oForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Crear un nuevo ", ctx.entityName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Form Status: ", ctx.oForm.status, "");
          }
        },
        directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0by1yb3V0ZWQtbmV3LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductoRoutedNewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-producto-routed-new',
            templateUrl: './producto-routed-new.component.html',
            styleUrls: ['./producto-routed-new.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_snackbar_service__WEBPACK_IMPORTED_MODULE_2__["SnackbarService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8seE":
    /*!**********************************************************************!*\
      !*** ./src/app/component/confirm-dialog/confirm-dialog.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ConfirmDialogComponent */

    /***/
    function seE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
        return ConfirmDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ConfirmDialogComponent = /*#__PURE__*/function () {
        function ConfirmDialogComponent(dialogRef) {
          _classCallCheck(this, ConfirmDialogComponent);

          this.dialogRef = dialogRef;
        }

        _createClass(ConfirmDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConfirmDialogComponent;
      }();

      ConfirmDialogComponent.??fac = function ConfirmDialogComponent_Factory(t) {
        return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      ConfirmDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ConfirmDialogComponent,
        selectors: [["app-confirm-dialog"]],
        decls: 8,
        vars: 2,
        consts: [["type", "button", "mat-raised-button", "", 3, "click"], ["type", "button", "mat-button", "", 3, "click"]],
        template: function ConfirmDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ConfirmDialogComponent_Template_button_click_4_listener() {
              return ctx.dialogRef.close(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "OK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.message);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ConfirmDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-confirm-dialog',
            templateUrl: './confirm-dialog.component.html',
            styleUrls: ['./confirm-dialog.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Bl9Y":
    /*!*********************************************************************************!*\
      !*** ./src/app/component/producto/producto-detail/producto-detail.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ProductDetailComponent */

    /***/
    function Bl9Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function () {
        return ProductDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_model_model_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/model/model-interfaces */
      "HcIn");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/producto.service */
      "+7nu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function ProductDetailComponent_th_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailComponent_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r5.name, " ");
        }
      }

      function ProductDetailComponent_th_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Value ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r6.value, " ");
        }
      }

      function ProductDetailComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 13);
        }
      }

      var _c0 = function _c0() {
        return ["/home"];
      };

      var ProductDetailComponent = /*#__PURE__*/function () {
        function ProductDetailComponent(actRoute, productoService, _location) {
          _classCallCheck(this, ProductDetailComponent);

          this.actRoute = actRoute;
          this.productoService = productoService;
          this._location = _location;
          this.product = new src_app_model_model_interfaces__WEBPACK_IMPORTED_MODULE_1__["Producto"](0);
          this.displayedColumns = ['name', 'value'];
          this.dataSource = [];

          this.processProductoFromJSON = function (product) {
            return Object.entries(product).map(function (obj) {
              switch (obj[0]) {
                case 'id':
                  {
                    return {
                      name: 'Id:',
                      value: obj[1]
                    };
                    break;
                  }

                case 'codigo':
                  {
                    return {
                      name: 'C??digo:',
                      value: obj[1]
                    };
                    break;
                  }

                case 'nombre':
                  {
                    return {
                      name: 'Nombre:',
                      value: obj[1]
                    };
                    break;
                  }

                case 'existencias':
                  {
                    return {
                      name: 'Existencias:',
                      value: JSON.stringify(obj[1]) + ' unidades'
                    };
                    break;
                  }

                case 'precio':
                  {
                    return {
                      name: 'Precio:',
                      value: JSON.stringify(obj[1]) + ' ???'
                    };
                    break;
                  }

                case 'imagen':
                  {
                    return {
                      name: 'C??digo de imagen:',
                      value: JSON.stringify(obj[1])
                    };
                    break;
                  }

                case 'descuento':
                  {
                    return {
                      name: 'Descuento:',
                      value: JSON.stringify(obj[1]) + ' %'
                    };
                    break;
                  }

                case 'tipoproducto':
                  {
                    return {
                      name: "Tipo de producto:",
                      value: obj[1].nombre + ' (id=' + obj[1].id + ')'
                    };
                    break;
                  }

                case 'compras':
                  {
                    return {
                      name: 'Este producto ha sido comprado:',
                      value: JSON.stringify(obj[1]) + ' veces'
                    };
                    break;
                  }

                case 'carritos':
                  {
                    return {
                      name: 'Este producto est?? en el carrito de:',
                      value: JSON.stringify(obj[1]) + ' clientes'
                    };
                    break;
                  }

                default:
                  {
                    return {
                      name: obj[0],
                      value: JSON.stringify(obj[1])
                    };
                    break;
                  }
              }
            });
          };

          this.product_id = Number(this.actRoute.snapshot.params.id);
        }

        _createClass(ProductDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.productoService.getProducto(this.product_id).subscribe(function (producto) {
              _this5.product = producto;
              _this5.dataSource = _this5.processProductoFromJSON(producto);
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this._location.back();
          }
        }]);

        return ProductDetailComponent;
      }();

      ProductDetailComponent.??fac = function ProductDetailComponent_Factory(t) {
        return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
      };

      ProductDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductDetailComponent,
        selectors: [["app-product-detail"]],
        decls: 22,
        vars: 4,
        consts: [[1, "mat-display-1"], [1, "dashboard-card-content"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "value"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["fxLayout", "row", "fxLayoutGap", "20px", "fxLayoutAlign", "center"], ["mat-flat-button", "", "color", "primary", 3, "routerLink"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-row", ""]],
        template: function ProductDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Detalle de producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](6, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ProductDetailComponent_th_7_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ProductDetailComponent_td_8_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](9, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ProductDetailComponent_th_10_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, ProductDetailComponent_td_11_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ProductDetailComponent_tr_12_Template, 1, 0, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-card-actions", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "disabled_by_default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailComponent_Template_button_click_18_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Volver ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c0));
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0by1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-detail',
            templateUrl: './producto-detail.component.html',
            styleUrls: ['./producto-detail.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "E8dp":
    /*!**************************************************!*\
      !*** ./src/app/component/home/home.component.ts ***!
      \**************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function E8dp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../menu/menu.component */
      "zu+5");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.??fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 8,
        vars: 0,
        consts: [[1, "mat-display-1"], [1, "dashboard-card-content"], [1, "mat-subheading-2", 2, "text-align", "center"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Bienvenidos a Wildcart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-card-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "WildCard es un cliente en Angular para Trolleyes Server con fines educativos.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "F57z":
    /*!******************************************************!*\
      !*** ./src/app/component/logout/logout.component.ts ***!
      \******************************************************/

    /*! exports provided: LogoutComponent */

    /***/
    function F57z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
        return LogoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_service_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/session.service */
      "pRC4");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../menu/menu.component */
      "zu+5");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var LogoutComponent = /*#__PURE__*/function () {
        function LogoutComponent(oRoute, oRouter, oSessionService) {
          _classCallCheck(this, LogoutComponent);

          this.oRoute = oRoute;
          this.oRouter = oRouter;
          this.oSessionService = oSessionService;
          this.oUsuarioSession = null;
          console.log("logout.component constructor"); //console.log(this.oRoute.snapshot.data.message);

          if (!this.oRoute.snapshot.data.message) {
            oRouter.navigate(['/home']);
          } else {
            this.oUsuarioSession = this.oRoute.snapshot.data.message;
          }
          /*
              this.oRoute.data.subscribe(
                res => {
                  console.log("logout.component response= ", res.message);
                  this.oUsuarioSession = res.message;
                },
                err => {
                  console.log('logout.component HTTP Error', err);
                  oRouter.navigate(['/home']);
                }
              );
          */

        }

        _createClass(LogoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("logout.component ngOninit");
          }
        }, {
          key: "closeSession",
          value: function closeSession() {
            var _this6 = this;

            this.oSessionService.logout().subscribe(function (data) {
              localStorage.clear();

              _this6.oRouter.navigate(['/home']);
            });
            /*
                if (this.oUsuarioSessionData)
                  this.oUsuarioSessionData.subscribe((oSessionResolved: ISessionResolved) => {
                    if (!oSessionResolved.isError) {
                      this.oUsuarioSession = oSessionResolved.user;
                    } else {
                      this.oRouter.navigate(['/home']);
                    }
            
                  })
              */
          }
        }, {
          key: "check",
          value: function check() {
            console.log("logout:check: ");
            this.oSessionService.check().subscribe(function (data) {
              console.log("check result: ", data);
            });
          }
        }]);

        return LogoutComponent;
      }();

      LogoutComponent.??fac = function LogoutComponent_Factory(t) {
        return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]));
      };

      LogoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LogoutComponent,
        selectors: [["app-logout"]],
        decls: 14,
        vars: 1,
        consts: [[1, "container", "mt-5", "pt-5"], [1, "row", "justify-content-center"], [1, "col-4"], [1, "centrar"], ["mat-flat-button", "", "color", "primary", 3, "click"]],
        template: function LogoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LogoutComponent_Template_button_click_9_listener() {
              return ctx.closeSession();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Cerrar la sesi\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LogoutComponent_Template_button_click_12_listener() {
              return ctx.check();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Check");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Actualmente est\xE1s logueado al sistema como ", ctx.oUsuarioSession.nombre, "");
          }
        },
        directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LogoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-logout',
            templateUrl: './logout.component.html',
            styleUrls: ['./logout.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: src_app_service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FuDw":
    /*!*******************************************!*\
      !*** ./src/app/service/crypto.service.ts ***!
      \*******************************************/

    /*! exports provided: CryptoService */

    /***/
    function FuDw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CryptoService", function () {
        return CryptoService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! crypto-js */
      "NFKh");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);

      var CryptoService = /*#__PURE__*/function () {
        function CryptoService() {
          _classCallCheck(this, CryptoService);
        }

        _createClass(CryptoService, [{
          key: "getSHA256",
          value: function getSHA256(value) {
            return crypto_js__WEBPACK_IMPORTED_MODULE_1__["SHA256"](value).toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Hex);
          } //The set method is use for encrypt the value.

        }, {
          key: "set",
          value: function set(keys, value) {
            var key = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(keys);
            var iv = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(keys);
            var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(value.toString()), key, {
              keySize: 128 / 8,
              iv: iv,
              mode: crypto_js__WEBPACK_IMPORTED_MODULE_1__["mode"].CBC,
              padding: crypto_js__WEBPACK_IMPORTED_MODULE_1__["pad"].Pkcs7
            });
            return encrypted.toString();
          } //The get method is use for decrypt the value.

        }, {
          key: "get",
          value: function get(keys, value) {
            var key = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(keys);
            var iv = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(keys);
            var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(value, key, {
              keySize: 128 / 8,
              iv: iv,
              mode: crypto_js__WEBPACK_IMPORTED_MODULE_1__["mode"].CBC,
              padding: crypto_js__WEBPACK_IMPORTED_MODULE_1__["pad"].Pkcs7
            });
            return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
          }
        }]);

        return CryptoService;
      }();

      CryptoService.??fac = function CryptoService_Factory(t) {
        return new (t || CryptoService)();
      };

      CryptoService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: CryptoService,
        factory: CryptoService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CryptoService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Fut9":
    /*!****************************************************!*\
      !*** ./src/app/component/about/about.component.ts ***!
      \****************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function Fut9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.??fac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 6,
        vars: 0,
        consts: [[1, "dashboard-card-content"], [2, "text-align", "center"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Bienvenidos a Wildcart ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "WildCard es un cliente en Angular para Trolleyes Server con fines educativos. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "GJZP":
    /*!********************************************!*\
      !*** ./src/app/resolve/session.resolve.ts ***!
      \********************************************/

    /*! exports provided: SessionResolver */

    /***/
    function GJZP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionResolver", function () {
        return SessionResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/observable/of */
      "neMA");
      /* harmony import */


      var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/add/operator/delay */
      "yYKy");
      /* harmony import */


      var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _service_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/session.service */
      "pRC4");

      var SessionResolver = /*#__PURE__*/function () {
        function SessionResolver(oSessionService) {
          _classCallCheck(this, SessionResolver);

          this.oSessionService = oSessionService;
        }

        _createClass(SessionResolver, [{
          key: "resolve",
          value: function resolve() {
            console.log("--> resolve");

            if (Object.keys(JSON.parse(localStorage.getItem("user") || '{}')).length === 0) {
              console.log("session.resolve.. user null");
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
              /*
              return this.oSessionService.check().pipe(
                  tap((u: any) => console.log("resolver check HTTP request executed", u)),
                  catchError(error => {
                      console.log('session.resolver: caught error', error);
                      return of(null) // si hay error devolvemos un observable de null
                      //return throwError(error);
                  }));
                  */
            } else {
              console.log("session.resolve.. user from localStorage!");
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(JSON.parse(localStorage.getItem("user") || '{}'));
            }
          }
        }]);

        return SessionResolver;
      }();

      SessionResolver.??fac = function SessionResolver_Factory(t) {
        return new (t || SessionResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]));
      };

      SessionResolver.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: SessionResolver,
        factory: SessionResolver.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SessionResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Gp7W":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/component/producto/producto-routed-container-view/producto-routed-container-view.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: ProductoRoutedContainerViewComponent */

    /***/
    function Gp7W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoRoutedContainerViewComponent", function () {
        return ProductoRoutedContainerViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/producto.service */
      "+7nu");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../menu/menu.component */
      "zu+5");
      /* harmony import */


      var _producto_view_producto_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../producto-view/producto-view.component */
      "0ZDr");

      var ProductoRoutedContainerViewComponent = /*#__PURE__*/function () {
        function ProductoRoutedContainerViewComponent(oRouter, actRoute, productoService, _snackBar, _location) {
          _classCallCheck(this, ProductoRoutedContainerViewComponent);

          this.oRouter = oRouter;
          this.actRoute = actRoute;
          this.productoService = productoService;
          this._snackBar = _snackBar;
          this._location = _location;
          this.entityName = "Producto";
          this.loading = false;
          this.entityId = Number(this.actRoute.snapshot.params.id);
        }

        _createClass(ProductoRoutedContainerViewComponent, [{
          key: "goBack",
          value: function goBack() {
            this._location.back();
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            this._snackBar.open(message, action, {
              duration: 9000
            });
          }
        }]);

        return ProductoRoutedContainerViewComponent;
      }();

      ProductoRoutedContainerViewComponent.??fac = function ProductoRoutedContainerViewComponent_Factory(t) {
        return new (t || ProductoRoutedContainerViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
      };

      ProductoRoutedContainerViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductoRoutedContainerViewComponent,
        selectors: [["app-producto-routed-container-view"]],
        decls: 9,
        vars: 3,
        consts: [[1, "container", 2, "margin-top", "90px", 3, "hidden"], [1, "row"], [1, "col"], [1, "d-flex", "justify-content-start"], [1, "fas", "fa-gift"], [3, "id"]],
        template: function ProductoRoutedContainerViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-producto-view", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Detalle de ", ctx.entityName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", ctx.entityId);
          }
        },
        directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _producto_view_producto_view_component__WEBPACK_IMPORTED_MODULE_6__["ProductoViewComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0by1yb3V0ZWQtY29udGFpbmVyLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductoRoutedContainerViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-producto-routed-container-view',
            templateUrl: './producto-routed-container-view.component.html',
            styleUrls: ['./producto-routed-container-view.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HcIn":
    /*!*******************************************!*\
      !*** ./src/app/model/model-interfaces.ts ***!
      \*******************************************/

    /*! exports provided: Tipousuario, Usuario, Tipoproducto, Producto, Page, Pageable, Sort */

    /***/
    function HcIn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tipousuario", function () {
        return Tipousuario;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Usuario", function () {
        return Usuario;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tipoproducto", function () {
        return Tipoproducto;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Producto", function () {
        return Producto;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Page", function () {
        return Page;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pageable", function () {
        return Pageable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Sort", function () {
        return Sort;
      }); // from https://transform.tools/json-to-typescript


      var Tipousuario = function Tipousuario(id) {
        _classCallCheck(this, Tipousuario);

        this.id = 0;
        this.nombre = "";
        this.usuarios = 0;
        this.id = id;
      };

      var Usuario = function Usuario() {
        _classCallCheck(this, Usuario);

        this.id = 0;
        this.dni = '';
        this.nombre = '';
        this.apellido1 = '';
        this.apellido2 = '';
        this.login = '';
        this.email = '';
        this.descuento = 0;
        this.facturas = 0;
        this.carritos = 0;
        this.tipousuario = new Tipousuario(0);
      };

      var Tipoproducto = function Tipoproducto(id) {
        _classCallCheck(this, Tipoproducto);

        this.id = 0;
        this.nombre = "";
        this.productos = 0;
        this.id = id;
      };

      var Producto = function Producto(id) {
        _classCallCheck(this, Producto);

        this.id = 0;
        this.codigo = "";
        this.nombre = "";
        this.existencias = 0;
        this.precio = 0;
        this.imagen = 0;
        this.descuento = 0;
        this.compras = 0;
        this.carritos = 0;
        this.tipoproducto = new Tipoproducto(0);
        this.id = id;
      };

      var Page = function Page() {
        _classCallCheck(this, Page);

        this.content = [];
        this.pageable = new Pageable();
        this.totalPages = 0;
        this.totalElements = 0;
        this.last = true;
        this.size = 0;
        this.number = 0;
        this.sort = new Sort();
        this.first = true;
        this.numberOfElements = 0;
        this.empty = true;
      };

      var Pageable = function Pageable() {
        _classCallCheck(this, Pageable);

        this.sort = new Sort();
        this.offset = 0;
        this.pageNumber = 0;
        this.pageSize = 0;
        this.paged = false;
        this.unpaged = false;
      };

      var Sort = function Sort() {
        _classCallCheck(this, Sort);

        this.sorted = true;
        this.unsorted = false;
        this.empty = true;
      };
      /***/

    },

    /***/
    "LWby":
    /*!*******************************************!*\
      !*** ./src/app/service/config.service.ts ***!
      \*******************************************/

    /*! exports provided: ConfigService */

    /***/
    function LWby(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ConfigService = function ConfigService() {
        _classCallCheck(this, ConfigService);

        this.API_URL = "http://localhost:8082";
      };

      ConfigService.??fac = function ConfigService_Factory(t) {
        return new (t || ConfigService)();
      };

      ConfigService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ConfigService,
        factory: ConfigService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ConfigService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service/session.service */
      "pRC4");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(oSessionService, router) {
          var _this7 = this;

          _classCallCheck(this, AppComponent);

          this.oSessionService = oSessionService;
          this.router = router;
          this.title = 'compostable';
          this.oUsuarioSession = null;
          this.router.events.subscribe(function (ev) {
            if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              /* Your code goes here on every router change */
              //console.log("app.component  ev", ev);

              /*
                      this.oSessionService.check().pipe(
                        tap((checkData: IUsuario) => this.oUsuarioSession = checkData),
                        tap((checkData: IUsuario) => console.log("app.component * ", checkData))
                      ).subscribe(err => {
                        this.oUsuarioSession = null;
                        console.log('app.component: HTTP Error: No active session', err)
                      });
              */
              if (Object.keys(JSON.parse(localStorage.getItem("user") || '{}')).length === 0) {
                _this7.oUsuarioSession = null;

                if (ev.url != "/producto" && ev.url != "/" && ev.url != "/home" && ev.url != "/about" && ev.url != "/login") {
                  //console.log("app.component navigate to login");
                  router.navigate(['/login']);
                }
                /*
                this.oSessionService.check().pipe(
                  //shareReplay()
                ).subscribe((checkData: IUsuario) => {
                  console.log("app.component constructor: check user data from check: ");
                  this.oUsuarioSession = checkData;
                  localStorage.setItem("user", JSON.stringify(checkData));
                }, err => {
                  this.oUsuarioSession = null;
                  console.log('app.component: HTTP Error: No active session', err)
                })
                */

              } else {
                _this7.oUsuarioSession = JSON.parse(localStorage.getItem("user") || '{}'); //console.log("app.component:constructor: check user data from localStorage!", this.oUsuarioSession);
              }
            }
          });
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onCheck",
          value: function onCheck(checkData) {//console.log("onCheck de app.component: checkData: ");
            //console.log(checkData);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XnGP":
    /*!********************************************!*\
      !*** ./src/app/service/dialogs.service.ts ***!
      \********************************************/

    /*! exports provided: DialogsService */

    /***/
    function XnGP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogsService", function () {
        return DialogsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../component/confirm-dialog/confirm-dialog.component */
      "8seE");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

      var DialogsService = /*#__PURE__*/function () {
        function DialogsService(dialog) {
          _classCallCheck(this, DialogsService);

          this.dialog = dialog;
        }

        _createClass(DialogsService, [{
          key: "confirm",
          value: function confirm(title, message) {
            var dialogRef;
            dialogRef = this.dialog.open(_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"]);
            dialogRef.componentInstance.title = title;
            dialogRef.componentInstance.message = message;
            return dialogRef.afterClosed();
          }
        }]);

        return DialogsService;
      }();

      DialogsService.??fac = function DialogsService_Factory(t) {
        return new (t || DialogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
      };

      DialogsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: DialogsService,
        factory: DialogsService.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DialogsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _component_home_home_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./component/home/home.component */
      "E8dp");
      /* harmony import */


      var _component_about_about_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./component/about/about.component */
      "Fut9");
      /* harmony import */


      var _component_producto_producto_plist_producto_events_plist_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./component/producto/producto-plist/producto-events-plist.component */
      "ZVWK");
      /* harmony import */


      var _component_producto_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./component/producto/producto-detail/producto-detail.component */
      "Bl9Y");
      /* harmony import */


      var _component_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./component/no-page-found/no-page-found.component */
      "mYYg");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _component_login_login_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./component/login/login.component */
      "g8H4");
      /* harmony import */


      var _component_logout_logout_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./component/logout/logout.component */
      "F57z");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./component/confirm-dialog/confirm-dialog.component */
      "8seE");
      /* harmony import */


      var _service_dialogs_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./service/dialogs.service */
      "XnGP");
      /* harmony import */


      var _service_crypto_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./service/crypto.service */
      "FuDw");
      /* harmony import */


      var _resolve_session_resolve__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./resolve/session.resolve */
      "GJZP");
      /* harmony import */


      var _service_session_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./service/session.service */
      "pRC4");
      /* harmony import */


      var _component_menu_menu_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./component/menu/menu.component */
      "zu+5");
      /* harmony import */


      var _component_producto_producto_routed_plist_producto_routed_plist_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ./component/producto/producto-routed-plist/producto-routed-plist.component */
      "5XD3");
      /* harmony import */


      var _component_producto_producto_routed_view_producto_routed_view_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ./component/producto/producto-routed-view/producto-routed-view.component */
      "f0yH");
      /* harmony import */


      var _component_producto_producto_routed_remove_producto_routed_remove_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ./component/producto/producto-routed-remove/producto-routed-remove.component */
      "dLHd");
      /* harmony import */


      var _service_snackbar_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ./service/snackbar.service */
      "nxnM");
      /* harmony import */


      var _service_config_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ./service/config.service */
      "LWby");
      /* harmony import */


      var _component_producto_producto_routed_new_producto_routed_new_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ./component/producto/producto-routed-new/producto-routed-new.component */
      "8JTj");
      /* harmony import */


      var _component_producto_producto_routed_container_view_producto_routed_container_view_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ./component/producto/producto-routed-container-view/producto-routed-container-view.component */
      "Gp7W");
      /* harmony import */


      var _component_producto_producto_view_producto_view_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ./component/producto/producto-view/producto-view.component */
      "0ZDr");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_32__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_32__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_service_dialogs_service__WEBPACK_IMPORTED_MODULE_46__["DialogsService"], _resolve_session_resolve__WEBPACK_IMPORTED_MODULE_48__["SessionResolver"], _service_session_service__WEBPACK_IMPORTED_MODULE_49__["SessionService"], _service_crypto_service__WEBPACK_IMPORTED_MODULE_47__["CryptoService"], _service_snackbar_service__WEBPACK_IMPORTED_MODULE_54__["SnackbarService"], _service_config_service__WEBPACK_IMPORTED_MODULE_55__["ConfigService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_34__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"], //FormControl,
        //FormGroup,
        _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_36__["HomeComponent"], _component_about_about_component__WEBPACK_IMPORTED_MODULE_37__["AboutComponent"], _component_producto_producto_plist_producto_events_plist_component__WEBPACK_IMPORTED_MODULE_38__["ProductoEventsPlistComponent"], _component_producto_producto_routed_plist_producto_routed_plist_component__WEBPACK_IMPORTED_MODULE_51__["ProductoRoutedPlistComponent"], _component_producto_producto_routed_view_producto_routed_view_component__WEBPACK_IMPORTED_MODULE_52__["ProductoRoutedViewComponent"], _component_producto_producto_routed_remove_producto_routed_remove_component__WEBPACK_IMPORTED_MODULE_53__["ProductoRoutedRemoveComponent"], _component_producto_producto_routed_new_producto_routed_new_component__WEBPACK_IMPORTED_MODULE_56__["ProductoRoutedNewComponent"], _component_producto_producto_routed_container_view_producto_routed_container_view_component__WEBPACK_IMPORTED_MODULE_57__["ProductoRoutedContainerViewComponent"], _component_producto_producto_view_producto_view_component__WEBPACK_IMPORTED_MODULE_58__["ProductoViewComponent"], _component_producto_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_39__["ProductDetailComponent"], _component_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_40__["NoPageFoundComponent"], _component_login_login_component__WEBPACK_IMPORTED_MODULE_42__["LoginComponent"], _component_logout_logout_component__WEBPACK_IMPORTED_MODULE_43__["LogoutComponent"], _component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_45__["ConfirmDialogComponent"], _component_menu_menu_component__WEBPACK_IMPORTED_MODULE_50__["MenuComponent"], _component_producto_producto_routed_new_producto_routed_new_component__WEBPACK_IMPORTED_MODULE_56__["ProductoRoutedNewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_34__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"], //FormControl,
          //FormGroup,
          _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_32__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_32__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_36__["HomeComponent"], _component_about_about_component__WEBPACK_IMPORTED_MODULE_37__["AboutComponent"], _component_producto_producto_plist_producto_events_plist_component__WEBPACK_IMPORTED_MODULE_38__["ProductoEventsPlistComponent"], _component_producto_producto_routed_plist_producto_routed_plist_component__WEBPACK_IMPORTED_MODULE_51__["ProductoRoutedPlistComponent"], _component_producto_producto_routed_view_producto_routed_view_component__WEBPACK_IMPORTED_MODULE_52__["ProductoRoutedViewComponent"], _component_producto_producto_routed_remove_producto_routed_remove_component__WEBPACK_IMPORTED_MODULE_53__["ProductoRoutedRemoveComponent"], _component_producto_producto_routed_new_producto_routed_new_component__WEBPACK_IMPORTED_MODULE_56__["ProductoRoutedNewComponent"], _component_producto_producto_routed_container_view_producto_routed_container_view_component__WEBPACK_IMPORTED_MODULE_57__["ProductoRoutedContainerViewComponent"], _component_producto_producto_view_producto_view_component__WEBPACK_IMPORTED_MODULE_58__["ProductoViewComponent"], _component_producto_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_39__["ProductDetailComponent"], _component_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_40__["NoPageFoundComponent"], _component_login_login_component__WEBPACK_IMPORTED_MODULE_42__["LoginComponent"], _component_logout_logout_component__WEBPACK_IMPORTED_MODULE_43__["LogoutComponent"], _component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_45__["ConfirmDialogComponent"], _component_menu_menu_component__WEBPACK_IMPORTED_MODULE_50__["MenuComponent"], _component_producto_producto_routed_new_producto_routed_new_component__WEBPACK_IMPORTED_MODULE_56__["ProductoRoutedNewComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_34__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"], //FormControl,
            //FormGroup,
            _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ReactiveFormsModule"]],
            providers: [_service_dialogs_service__WEBPACK_IMPORTED_MODULE_46__["DialogsService"], _resolve_session_resolve__WEBPACK_IMPORTED_MODULE_48__["SessionResolver"], _service_session_service__WEBPACK_IMPORTED_MODULE_49__["SessionService"], _service_crypto_service__WEBPACK_IMPORTED_MODULE_47__["CryptoService"], _service_snackbar_service__WEBPACK_IMPORTED_MODULE_54__["SnackbarService"], _service_config_service__WEBPACK_IMPORTED_MODULE_55__["ConfigService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZVWK":
    /*!**************************************************************************************!*\
      !*** ./src/app/component/producto/producto-plist/producto-events-plist.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ProductoEventsPlistComponent */

    /***/
    function ZVWK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoEventsPlistComponent", function () {
        return ProductoEventsPlistComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_model_model_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/model/model-interfaces */
      "HcIn");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/producto.service */
      "+7nu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../menu/menu.component */
      "zu+5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function ProductoEventsPlistComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductoEventsPlistComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var products_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", products_r16.id, " ");
        }
      }

      function ProductoEventsPlistComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Nombre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductoEventsPlistComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var products_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", products_r17.nombre, " ");
        }
      }

      function ProductoEventsPlistComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " C\xF3digo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductoEventsPlistComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var products_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", products_r18.codigo, " ");
        }
      }

      function ProductoEventsPlistComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Existencias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductoEventsPlistComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var products_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", products_r19.existencias, " ");
        }
      }

      function ProductoEventsPlistComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Precio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductoEventsPlistComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var products_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", products_r20.precio, " ");
        }
      }

      function ProductoEventsPlistComponent_th_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Tipo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductoEventsPlistComponent_td_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var products_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", products_r21.tipoproducto.nombre, " ");
        }
      }

      function ProductoEventsPlistComponent_th_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Herramientas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/producto-detail/", a1];
      };

      function ProductoEventsPlistComponent_td_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var products_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, products_r22.id));
        }
      }

      function ProductoEventsPlistComponent_tr_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 41);
        }
      }

      function ProductoEventsPlistComponent_tr_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 42);
        }
      }

      var _c1 = function _c1() {
        return [10, 25, 100];
      };

      var _c2 = function _c2() {
        return ["/home"];
      };

      var ProductoEventsPlistComponent = /*#__PURE__*/function () {
        function ProductoEventsPlistComponent(productoService, router, _location) {
          var _this8 = this;

          _classCallCheck(this, ProductoEventsPlistComponent);

          this.productoService = productoService;
          this.router = router;
          this._location = _location;
          this.currentSort = undefined;
          this.totalElements = 0;
          this.totalPages = 0;
          this.pageIndex = 0;
          this.pageSize = 10;
          this.page = new src_app_model_model_interfaces__WEBPACK_IMPORTED_MODULE_1__["Page"]();
          this.columnas = ['id', 'nombre', 'codigo', 'precio', 'existencias', 'tipo', 'herramientas'];
          this.loading = false; //new MatTableDataSource(<IProducto> response);

          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](); //@ViewChild(MatSort) sort: MatSort | undefined;

          this.getPage = function (pageNumber, rpp) {
            var sort = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
            var filter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
            _this8.loading = true;

            _this8.productoService.getProductos(pageNumber, rpp, sort, filter).subscribe(function (oPage) {
              _this8.page = oPage;
              _this8.Products = oPage.content;
              _this8.totalElements = oPage['totalElements'];
              _this8.totalPages = oPage['totalPages'];
              _this8.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](oPage.content); //console.log(this.dataSource);   

              _this8.pageSize = oPage['size'];
              _this8.pageIndex = pageNumber;
              _this8.loading = false;
            }, function (error) {
              console.log(error);
              _this8.loading = false;
            });
          };

          this.strToFind = undefined;
          this.getPage(this.pageIndex, this.pageSize, this.currentSort, this.strToFind);
        }

        _createClass(ProductoEventsPlistComponent, [{
          key: "nextPage",
          value: function nextPage(event) {
            this.getPage(event.pageIndex, event.pageSize, this.currentSort, this.strToFind);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToDetails",
          value: function goToDetails(cod) {
            this.router.navigate(['/producto-detail/', cod]);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this._location.back();
          }
        }, {
          key: "onSubmitFindForm",
          value: function onSubmitFindForm() {
            //console.log(this.strToFind);
            this.getPage(0, this.pageSize, this.currentSort, this.strToFind);
          }
        }, {
          key: "sortData",
          value: function sortData(sort) {
            console.log("sorting");
            this.currentSort = sort;
            this.getPage(this.pageIndex, this.pageSize, sort, this.strToFind);
          }
        }]);

        return ProductoEventsPlistComponent;
      }();

      ProductoEventsPlistComponent.??fac = function ProductoEventsPlistComponent_Factory(t) {
        return new (t || ProductoEventsPlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]));
      };

      ProductoEventsPlistComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductoEventsPlistComponent,
        selectors: [["app-producto-events-plist"]],
        viewQuery: function ProductoEventsPlistComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 51,
        vars: 13,
        consts: [[1, "container-fluid", "px-4", "mt-5", "pt-5"], [1, "row", "justify-content-center"], [1, "col"], [1, "row"], [1, "find-form", 3, "submit"], [1, "full-width"], ["matInput", "", "placeholder", "Introduce parte del nombre, del id o del c\xF3digo y pulsa enter", "name", "strFind", 3, "ngModel", "ngModelChange"], [1, "align-right"], [3, "pageSizeOptions", "pageSize", "length", "page"], ["mode", "determinate", 3, "value"], ["mat-table", "", "matSort", "", "matSortActive", "id", "matSortDirection", "asc", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["matColumnDef", "codigo"], ["matColumnDef", "existencias"], ["mat-header-cell", "", "mat-sort-header", "", "class", "align-center", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "align-center", 4, "matCellDef"], ["matColumnDef", "precio"], ["mat-header-cell", "", "class", "align-center", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "align-right", 4, "matCellDef"], ["matColumnDef", "tipo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "herramientas"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "row", "mt-5"], [1, "control-group", "text-right"], [1, "controls"], [1, "btn", "btn-info", 3, "routerLink"], ["ng-class", "fas fa-home"], [1, "btn", "btn-info", "ml-3", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "align-center"], ["mat-cell", "", 1, "align-center"], ["mat-header-cell", "", 1, "align-center"], ["mat-cell", "", 1, "align-right"], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", "aria-label", "Detalles", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ProductoEventsPlistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Listado de productos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function ProductoEventsPlistComponent_Template_form_submit_8_listener() {
              return ctx.onSubmitFindForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Buscar un producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductoEventsPlistComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.strToFind = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-paginator", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("page", function ProductoEventsPlistComponent_Template_mat_paginator_page_15_listener($event) {
              return ctx.nextPage($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "mat-progress-bar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("matSortChange", function ProductoEventsPlistComponent_Template_table_matSortChange_17_listener($event) {
              return ctx.sortData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](18, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ProductoEventsPlistComponent_th_19_Template, 2, 0, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, ProductoEventsPlistComponent_td_20_Template, 2, 1, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](21, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ProductoEventsPlistComponent_th_22_Template, 2, 0, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ProductoEventsPlistComponent_td_23_Template, 2, 1, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](24, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ProductoEventsPlistComponent_th_25_Template, 2, 0, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, ProductoEventsPlistComponent_td_26_Template, 2, 1, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](27, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ProductoEventsPlistComponent_th_28_Template, 2, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ProductoEventsPlistComponent_td_29_Template, 2, 1, "td", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](30, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, ProductoEventsPlistComponent_th_31_Template, 2, 0, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, ProductoEventsPlistComponent_td_32_Template, 2, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](33, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, ProductoEventsPlistComponent_th_34_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, ProductoEventsPlistComponent_td_35_Template, 2, 1, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](36, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, ProductoEventsPlistComponent_th_37_Template, 2, 0, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, ProductoEventsPlistComponent_td_38_Template, 4, 3, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, ProductoEventsPlistComponent_tr_39_Template, 1, 0, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, ProductoEventsPlistComponent_tr_40_Template, 1, 0, "tr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Ir a home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductoEventsPlistComponent_Template_a_click_48_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " Volver ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.strToFind);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" P\xE1gina ", ctx.pageIndex + 1, " de ", ctx.totalPages, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c1))("pageSize", ctx.pageSize)("length", ctx.totalElements);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", (ctx.pageIndex + 1) * 100 / ctx.totalPages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.columnas);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.columnas);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c2));
          }
        },
        directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RvLWV2ZW50cy1wbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InByb2R1Y3RvLWV2ZW50cy1wbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFsaWduLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductoEventsPlistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-producto-events-plist',
            templateUrl: './producto-events-plist.component.html',
            styleUrls: ['./producto-events-plist.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "c8VH":
    /*!***********************************************!*\
      !*** ./src/app/service/pagination.service.ts ***!
      \***********************************************/

    /*! exports provided: PaginationService */

    /***/
    function c8VH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationService", function () {
        return PaginationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PaginationService = function PaginationService() {
        _classCallCheck(this, PaginationService);

        this.pagination = function (pages, page) {
          console.log("pag", pages, page);
          var botonera = [];
          var i;
          var neighbourhood = 2;

          for (i = 1; i <= pages; i++) {
            if (i == 1) {
              botonera.push(i.toString());
            } else if (i > page - neighbourhood && i < page + neighbourhood) {
              botonera.push(i.toString());
            } else if (i == pages) {
              botonera.push(i.toString());
            } else if (i == page - neighbourhood || i == page + neighbourhood) {
              botonera.push('...');
            }
          }

          return botonera;
        };
      };

      PaginationService.??fac = function PaginationService_Factory(t) {
        return new (t || PaginationService)();
      };

      PaginationService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: PaginationService,
        factory: PaginationService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PaginationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "dLHd":
    /*!***********************************************************************************************!*\
      !*** ./src/app/component/producto/producto-routed-remove/producto-routed-remove.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ProductoRoutedRemoveComponent */

    /***/
    function dLHd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoRoutedRemoveComponent", function () {
        return ProductoRoutedRemoveComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/service/snackbar.service */
      "nxnM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/producto.service */
      "+7nu");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../menu/menu.component */
      "zu+5");

      var _c0 = function _c0() {
        return ["/home"];
      };

      var ProductoRoutedRemoveComponent = /*#__PURE__*/function () {
        function ProductoRoutedRemoveComponent(oSnackbarService, oRouter, actRoute, productoService, _snackBar, _location) {
          var _this9 = this;

          _classCallCheck(this, ProductoRoutedRemoveComponent);

          this.oSnackbarService = oSnackbarService;
          this.oRouter = oRouter;
          this.actRoute = actRoute;
          this.productoService = productoService;
          this._snackBar = _snackBar;
          this._location = _location;
          this.entityName = "Producto";
          this.loading = false;

          this.get = function () {
            _this9.loading = true;

            _this9.productoService.getProducto(_this9.entityId).subscribe(function (producto) {
              _this9.entityData = producto;
              _this9.loading = false;
            }, function (error) {
              if (error.status == 401) {
                //se ha perdido la sesi??n        
                _this9.oSnackbarService.openSnackBar("Su sesi??n ha expirado. Por favor, debe volver a autenticarse en la p??gina de login.", "ERROR DE SESI??N");

                localStorage.clear();

                if (_this9.oRouter !== undefined) {
                  _this9.oRouter.navigate(['/login']);
                }
              } else {
                //servidor caido
                _this9.oSnackbarService.openSnackBar("Hay alg??n problema t??cnico con el servidor en Internet. Por favor, avise al t??cnico de la aplicaci??n.", "ERROR DE SERVIDOR");

                localStorage.clear();

                if (_this9.oRouter !== undefined) {
                  _this9.oRouter.navigate(['/home']);
                }
              }

              _this9.loading = false;
            });
          };

          this.remove = function () {
            _this9.loading = true;
            console.log("pre-remove de producto", _this9.entityId);

            _this9.productoService.removeProducto(_this9.entityId).subscribe(function (result) {
              console.log("remove de producto", result);

              if (result === 0) {
                _this9.oSnackbarService.openSnackBar(_this9.entityName + " " + _this9.entityId + ": Ha sido borrado.", "OK", "back", 3000);
              } else {
                _this9.oSnackbarService.openSnackBar(_this9.entityName + " " + _this9.entityId + ": No se ha podido borrar.", "ERROR DE SERVIDOR");
              }

              _this9.loading = false; //this._snackBar.dismiss();      
            }, function (error) {
              if (error.status == 401) {
                //se ha perdido la sesi??n        
                _this9.oSnackbarService.openSnackBar("Su sesi??n ha expirado. Por favor debe volver a autenticarse en la p??gina de login.", "ERROR DE SESI??N"); //localStorage.clear();


                if (_this9.oRouter !== undefined) {
                  _this9.oRouter.navigate(['/login']);
                }
              } else {
                //servidor caido
                _this9.oSnackbarService.openSnackBar("Hay alg??n problema t??cnico con el servidor en Internet. Por favor avise al t??cnico de la aplicaci??n.", "ERROR DE SERVIDOR");

                localStorage.clear();

                if (_this9.oRouter !== undefined) {
                  _this9.oRouter.navigate(['/home']);
                }
              }

              _this9.loading = false;
            });
          };

          this.goBack = function () {
            return _this9._location.back();
          };

          this.entityId = Number(this.actRoute.snapshot.params.id);

          if (this.entityId) {
            this.get();
          } else {
            this.oSnackbarService.openSnackBar("No se puede obtener la entidad porque no se ha comunicado el id.", "ERROR DE URL EN CLIENTE");
          }
        }

        _createClass(ProductoRoutedRemoveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductoRoutedRemoveComponent;
      }();

      ProductoRoutedRemoveComponent.??fac = function ProductoRoutedRemoveComponent_Factory(t) {
        return new (t || ProductoRoutedRemoveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_snackbar_service__WEBPACK_IMPORTED_MODULE_1__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
      };

      ProductoRoutedRemoveComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductoRoutedRemoveComponent,
        selectors: [["app-producto-routed-remove"]],
        decls: 81,
        vars: 16,
        consts: [[1, "loader", 3, "hidden"], [1, "container", 2, "margin-top", "90px", 3, "hidden"], [1, "row"], [1, "col"], [1, "d-flex", "justify-content-between"], [1, "fas", "fa-gift"], ["height", "100", 3, "src"], [1, "row", "mt-5"], [1, "col", "text-left"], [1, "table", "table-striped", "table-sm"], [3, "href"], [1, "control-group", "text-center", "mt-5"], [1, "controls"], [1, "btn", "btn-danger", "mr-2", 3, "click"], [1, "fas", "fa-thumbs-up"], [1, "btn", "btn-info", "mr-2", 3, "click"], [1, "fas", "fa-thumbs-down"], [1, "btn", "btn-primary", "mr-2", 3, "routerLink"], [1, "fas", "fa-home"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-arrow-circle-left"], [1, "pt-3", "border-top", 2, "height", "80px"], [1, "col-12", "col-md"], [1, "text-muted"], ["href", "https://github.com/rafaelaznar/compostable"], [1, "fab", "fa-github"], ["href", "https://github.com/rafaelaznar/trolleyesSBserver"]],
        template: function ProductoRoutedRemoveComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "C\xF3digo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Existencias");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Descuento");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Tipo de producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "\xBFEst\xE1 seguro de que desea borrar el registro?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductoRoutedRemoveComponent_Template_a_click_57_listener() {
              return ctx.remove();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " Si");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductoRoutedRemoveComponent_Template_a_click_60_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " Ir a home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductoRoutedRemoveComponent_Template_a_click_66_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Volver ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "footer", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "WILDCART \xA9 MIT licensed BY Rafael Aznar & DAW students, 2020 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " CLIENT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " SERVER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Borrado de ", ctx.entityName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "http://localhost:8082/file/", ctx.entityData == null ? null : ctx.entityData.imagen, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.codigo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.existencias);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.entityData == null ? null : ctx.entityData.precio, " \u20AC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.entityData == null ? null : ctx.entityData.descuento, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "tipoproducto/view/", ctx.entityData == null ? null : ctx.entityData.tipoproducto == null ? null : ctx.entityData.tipoproducto.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.tipoproducto == null ? null : ctx.entityData.tipoproducto.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "producto/tipoproducto////", ctx.entityData == null ? null : ctx.entityData.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("(", ctx.entityData == null ? null : ctx.entityData.tipoproducto == null ? null : ctx.entityData.tipoproducto.productos, " productos)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](15, _c0));
          }
        },
        directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0by1yb3V0ZWQtcmVtb3ZlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductoRoutedRemoveComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-producto-routed-remove',
            templateUrl: './producto-routed-remove.component.html',
            styleUrls: ['./producto-routed-remove.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_snackbar_service__WEBPACK_IMPORTED_MODULE_1__["SnackbarService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "f0yH":
    /*!*******************************************************************************************!*\
      !*** ./src/app/component/producto/producto-routed-view/producto-routed-view.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ProductoRoutedViewComponent */

    /***/
    function f0yH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoRoutedViewComponent", function () {
        return ProductoRoutedViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/producto.service */
      "+7nu");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../menu/menu.component */
      "zu+5");

      var _c0 = function _c0() {
        return ["/home"];
      };

      var ProductoRoutedViewComponent = /*#__PURE__*/function () {
        function ProductoRoutedViewComponent(oRouter, actRoute, productoService, _snackBar, _location) {
          var _this10 = this;

          _classCallCheck(this, ProductoRoutedViewComponent);

          this.oRouter = oRouter;
          this.actRoute = actRoute;
          this.productoService = productoService;
          this._snackBar = _snackBar;
          this._location = _location;
          this.entityName = "Producto";
          this.loading = false;

          this.get = function (id) {
            _this10.loading = true;

            _this10.productoService.getProducto(id).subscribe(function (producto) {
              _this10.entityData = producto;
              _this10.loading = false;
            }, function (error) {
              if (error.status == 401) {
                //se ha perdido la sesi??n        
                _this10.openSnackBar("Su sesi??n ha expirado. Por favor debe volver a autenticarse en la p??gina de login.", "ERROR DE SESI??N");

                localStorage.clear();

                if (_this10.oRouter !== undefined) {
                  _this10.oRouter.navigate(['/login']);
                }
              } else {
                //servidor caido
                _this10.openSnackBar("Hay alg??n problema t??cnico con el servidor en Internet. Por favor avise al t??cnico de la aplicaci??n.", "ERROR DE SERVIDOR");

                localStorage.clear();

                if (_this10.oRouter !== undefined) {
                  _this10.oRouter.navigate(['/home']);
                }
              }

              _this10.loading = false;
            });
          };

          this.entityId = Number(this.actRoute.snapshot.params.id);

          if (this.entityId) {
            this.get(this.entityId);
          } else {
            this.openSnackBar("No se puede obtener la entidad porque no se ha comunicado el id.", "ERROR DE URL EN CLIENTE");
          }
        }

        _createClass(ProductoRoutedViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this._location.back();
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            this._snackBar.open(message, action, {
              duration: 9000
            });
          }
        }]);

        return ProductoRoutedViewComponent;
      }();

      ProductoRoutedViewComponent.??fac = function ProductoRoutedViewComponent_Factory(t) {
        return new (t || ProductoRoutedViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
      };

      ProductoRoutedViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductoRoutedViewComponent,
        selectors: [["app-producto-routed-view"]],
        decls: 73,
        vars: 16,
        consts: [[1, "loader", 3, "hidden"], [1, "container", 2, "margin-top", "90px", 3, "hidden"], [1, "row"], [1, "col"], [1, "d-flex", "justify-content-between"], [1, "fas", "fa-gift"], ["height", "100", 3, "src"], [1, "row", "mt-5"], [1, "col", "text-left"], [1, "table", "table-striped", "table-sm"], [3, "href"], [1, "control-group", "text-center", "mt-5"], [1, "controls"], [1, "btn", "btn-primary", "mr-2", 3, "routerLink"], [1, "fas", "fa-home"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-arrow-circle-left"], [1, "pt-3", "border-top", 2, "height", "80px"], [1, "col-12", "col-md"], [1, "text-muted"], ["href", "https://github.com/rafaelaznar/compostable"], [1, "fab", "fa-github"], ["href", "https://github.com/rafaelaznar/trolleyesSBserver"]],
        template: function ProductoRoutedViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "C\xF3digo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Existencias");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Descuento");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Tipo de producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Ir a home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductoRoutedViewComponent_Template_a_click_58_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " Volver ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "footer", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "WILDCART \xA9 MIT licensed BY Rafael Aznar & DAW students, 2020 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " CLIENT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " SERVER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Detalle de ", ctx.entityName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "http://localhost:8082/file/", ctx.entityData == null ? null : ctx.entityData.imagen, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.codigo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.existencias);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.entityData == null ? null : ctx.entityData.precio, " \u20AC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.entityData == null ? null : ctx.entityData.descuento, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "tipoproducto/view/", ctx.entityData == null ? null : ctx.entityData.tipoproducto == null ? null : ctx.entityData.tipoproducto.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.entityData == null ? null : ctx.entityData.tipoproducto == null ? null : ctx.entityData.tipoproducto.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "producto/tipoproducto////", ctx.entityData == null ? null : ctx.entityData.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("(", ctx.entityData == null ? null : ctx.entityData.tipoproducto == null ? null : ctx.entityData.tipoproducto.productos, " productos)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](15, _c0));
          }
        },
        directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0by1yb3V0ZWQtdmlldy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductoRoutedViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-producto-routed-view',
            templateUrl: './producto-routed-view.component.html',
            styleUrls: ['./producto-routed-view.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "g8H4":
    /*!****************************************************!*\
      !*** ./src/app/component/login/login.component.ts ***!
      \****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function g8H4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _service_dialogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/dialogs.service */
      "XnGP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_service_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/session.service */
      "pRC4");
      /* harmony import */


      var _service_crypto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/crypto.service */
      "FuDw");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../menu/menu.component */
      "zu+5");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function LoginComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " El nombre de usuario es obligatorio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " La longitud m\xEDnima es 6 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx_r0.formularioLogin.get("login").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx_r0.formularioLogin.get("login").errors.minlength);
        }
      }

      function LoginComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " El password es obligatorio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " La longitud m\xEDnima es 6 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx_r1.formularioLogin.get("password").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx_r1.formularioLogin.get("password").errors.minlength);
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(FormBuilder, dialogsService, oRoute, oRouter, oSessionService, oCryptoService) {
          _classCallCheck(this, LoginComponent);

          this.FormBuilder = FormBuilder;
          this.dialogsService = dialogsService;
          this.oRoute = oRoute;
          this.oRouter = oRouter;
          this.oSessionService = oSessionService;
          this.oCryptoService = oCryptoService;
          this.stock = "hola mundo";
          this.oUsuarioSession = null;

          if (this.oRoute.snapshot.data.message) {
            console.log("login", this.oRoute.snapshot.data.message);
            oRouter.navigate(['/home']);
          } else {
            this.oUsuarioSession = this.oRoute.snapshot.data.message;
          } //this.loginData = null; //{ user: "", password: "" };


          this.formularioLogin = this.FormBuilder.group({
            login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openDialog",
          value: function openDialog() {
            var _this11 = this;

            console.log("--");
            this.dialogsService.confirm('Confirm Dialog', 'Are you sure you want to do this?').subscribe(function (res) {
              return _this11.result = res;
            }); //https://stackblitz.com/edit/material-dialogs-sample?file=app%2Fapp.component.ts

            return false; // if you don't return false pops console ERROR TypeError: this.selector is not a function
          }
        }, {
          key: "loginAdmin",
          value: function loginAdmin() {
            this.formularioLogin.controls['login'].setValue("admin");
            this.formularioLogin.controls['password'].setValue("trolleyes");
            this.onSubmit();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this12 = this;

            var formData = new FormData();
            var loginData = {
              login: this.formularioLogin.get('login').value,
              password: this.oCryptoService.getSHA256(this.formularioLogin.get('password').value)
            };
            console.log("login:onSubmit: ", loginData);
            this.oSessionService.login(JSON.stringify(loginData)).subscribe(function (data) {
              _this12.data = data;
              localStorage.setItem("user", JSON.stringify(data));

              if (_this12.data != null) {
                _this12.oRouter.navigate(['/home']);
              } else {//this.dialog.open(DialogDataExampleDialog, "error de autenticaci??n");
              }
            });
            return false;
          }
        }, {
          key: "check",
          value: function check() {
            console.log("login:check: ");
            this.oSessionService.check().subscribe(function (data) {
              console.log("check result: ", data);
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_dialogs_service__WEBPACK_IMPORTED_MODULE_2__["DialogsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_crypto_service__WEBPACK_IMPORTED_MODULE_5__["CryptoService"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 35,
        vars: 8,
        consts: [[1, "container", "mt-5", "pt-5"], [1, "row", "justify-content-center"], [1, "col-4"], [1, "centrar"], ["novalidate", "", 1, "centrar", 3, "formGroup", "ngSubmit"], ["appearance", "legacy", 2, "width", "400px !important"], ["matInput", "", "autofocus", "", "type", "text", "formControlName", "login"], [4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [3, "hidden"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Usuario");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, LoginComponent_div_13_Template, 5, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, LoginComponent_div_20_Template, 5, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Enviar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_button_click_25_listener() {
              return ctx.loginAdmin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Login Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_button_click_28_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_button_click_33_listener() {
              return ctx.check();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Check");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var tmp_2_0 = null;
            var tmp_4_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.formularioLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.formularioLogin.get("login").touched && ctx.formularioLogin.get("login").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !((tmp_2_0 = ctx.formularioLogin.get("login")) == null ? null : tmp_2_0.valid) && (((tmp_2_0 = ctx.formularioLogin.get("login")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.formularioLogin.get("login")) == null ? null : tmp_2_0.touched)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.formularioLogin.get("password").touched && ctx.formularioLogin.get("password").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !((tmp_4_0 = ctx.formularioLogin.get("password")) == null ? null : tmp_4_0.valid) && (((tmp_4_0 = ctx.formularioLogin.get("password")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.formularioLogin.get("password")) == null ? null : tmp_4_0.touched)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Result from dialog: ", ctx.result, "");
          }
        },
        directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
        styles: [".centrar[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _service_dialogs_service__WEBPACK_IMPORTED_MODULE_2__["DialogsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
          }, {
            type: _service_crypto_service__WEBPACK_IMPORTED_MODULE_5__["CryptoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mYYg":
    /*!********************************************************************!*\
      !*** ./src/app/component/no-page-found/no-page-found.component.ts ***!
      \********************************************************************/

    /*! exports provided: NoPageFoundComponent */

    /***/
    function mYYg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoPageFoundComponent", function () {
        return NoPageFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/home"];
      };

      var NoPageFoundComponent = /*#__PURE__*/function () {
        function NoPageFoundComponent(_location) {
          var _this13 = this;

          _classCallCheck(this, NoPageFoundComponent);

          this._location = _location;
          this.loading = false;

          this.goBack = function () {
            return _this13._location.back();
          };
        }

        _createClass(NoPageFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NoPageFoundComponent;
      }();

      NoPageFoundComponent.??fac = function NoPageFoundComponent_Factory(t) {
        return new (t || NoPageFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]));
      };

      NoPageFoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NoPageFoundComponent,
        selectors: [["app-no-page-found"]],
        decls: 29,
        vars: 3,
        consts: [[1, "container", 2, "margin-top", "90px", 3, "hidden"], [1, "row"], [1, "col"], [1, "d-flex", "justify-content-between"], [1, "fas", "fa-question-circle"], [1, "control-group", "text-center", "mt-5"], [1, "controls"], [1, "btn", "btn-primary", "mr-2", 3, "routerLink"], [1, "fas", "fa-home"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-arrow-circle-left"], [1, "pt-3", "border-top", 2, "height", "80px"], [1, "col-12", "col-md"], [1, "text-muted"], ["href", "https://github.com/rafaelaznar/compostable"], [1, "fab", "fa-github"], ["href", "https://github.com/rafaelaznar/trolleyesSBserver"]],
        template: function NoPageFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " 404: NOT FOUND");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "La p\xE1gina no existe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Ir a home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NoPageFoundComponent_Template_a_click_14_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Volver ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "footer", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "WILDCART \xA9 MIT licensed BY Rafael Aznar & DAW students, 2020 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " CLIENT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " SERVER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuby1wYWdlLWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NoPageFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-no-page-found',
            templateUrl: './no-page-found.component.html',
            styleUrls: ['./no-page-found.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nxnM":
    /*!*********************************************!*\
      !*** ./src/app/service/snackbar.service.ts ***!
      \*********************************************/

    /*! exports provided: SnackbarService */

    /***/
    function nxnM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SnackbarService", function () {
        return SnackbarService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SnackbarService = /*#__PURE__*/function () {
        function SnackbarService(oSnackBar, oLocation, oRouter) {
          _classCallCheck(this, SnackbarService);

          this.oSnackBar = oSnackBar;
          this.oLocation = oLocation;
          this.oRouter = oRouter;
        }

        _createClass(SnackbarService, [{
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            var _this14 = this;

            var navigateDir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var snackDuration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 9000;

            if (navigateDir == '') {
              this.oSnackBar.open(message, action, {
                duration: snackDuration
              });
            } else {
              this.oSnackBar.open(message, action, {
                duration: snackDuration
              }).afterDismissed().subscribe(function () {
                if (navigateDir == 'back') {
                  _this14.oLocation.back();
                } else {
                  if (navigateDir != '') {
                    _this14.oRouter.navigate([navigateDir]);
                  }
                }
              });
            }
          }
        }]);

        return SnackbarService;
      }();

      SnackbarService.??fac = function SnackbarService_Factory(t) {
        return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      SnackbarService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: SnackbarService,
        factory: SnackbarService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SnackbarService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pRC4":
    /*!********************************************!*\
      !*** ./src/app/service/session.service.ts ***!
      \********************************************/

    /*! exports provided: SessionService */

    /***/
    function pRC4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionService", function () {
        return SessionService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./config.service */
      "LWby");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SessionService = /*#__PURE__*/function () {
        function SessionService(oConfigService, http, router) {
          _classCallCheck(this, SessionService);

          this.oConfigService = oConfigService;
          this.http = http;
          this.router = router;
          this.sURL = this.oConfigService.API_URL + '/session/';
          this.onCheck = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            }),
            withCredentials: true
          };
        }

        _createClass(SessionService, [{
          key: "handleError",
          value: function handleError(error) {
            var errorMessage = 'Unknown error!';

            if (error.error instanceof ErrorEvent) {
              // Client-side errors
              errorMessage = "Error: ".concat(error.error.message);
            } else {
              // Server-side errors
              errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
            } //window.alert(errorMessage);


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
          }
        }, {
          key: "login",
          value: function login(loginData) {
            return this.http.post(this.sURL, loginData, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (u) {
              return console.log("session.service login HTTP request executed", u);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.http["delete"](this.sURL, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "check",
          value: function check() {
            console.log("session.service check");
            return this.http.get(this.sURL, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (u) {
              return console.log("session.service check HTTP request executed", u);
            }), //shareReplay(),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              console.log('session.service: caught error and rethrowing', err);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }]);

        return SessionService;
      }();

      SessionService.??fac = function SessionService_Factory(t) {
        return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      SessionService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: SessionService,
        factory: SessionService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SessionService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _component_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./component/about/about.component */
      "Fut9");
      /* harmony import */


      var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./component/home/home.component */
      "E8dp");
      /* harmony import */


      var _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./component/login/login.component */
      "g8H4");
      /* harmony import */


      var _component_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./component/logout/logout.component */
      "F57z");
      /* harmony import */


      var _component_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./component/no-page-found/no-page-found.component */
      "mYYg");
      /* harmony import */


      var _component_producto_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./component/producto/producto-detail/producto-detail.component */
      "Bl9Y");
      /* harmony import */


      var _component_producto_producto_routed_container_view_producto_routed_container_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./component/producto/producto-routed-container-view/producto-routed-container-view.component */
      "Gp7W");
      /* harmony import */


      var _component_producto_producto_routed_new_producto_routed_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./component/producto/producto-routed-new/producto-routed-new.component */
      "8JTj");
      /* harmony import */


      var _component_producto_producto_routed_plist_producto_routed_plist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./component/producto/producto-routed-plist/producto-routed-plist.component */
      "5XD3");
      /* harmony import */


      var _component_producto_producto_routed_remove_producto_routed_remove_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./component/producto/producto-routed-remove/producto-routed-remove.component */
      "dLHd");
      /* harmony import */


      var _component_producto_producto_routed_view_producto_routed_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./component/producto/producto-routed-view/producto-routed-view.component */
      "f0yH");
      /* harmony import */


      var _resolve_session_resolve__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./resolve/session.resolve */
      "GJZP");

      var routes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: 'about',
        component: _component_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
      }, {
        path: 'producto/plist',
        component: _component_producto_producto_routed_plist_producto_routed_plist_component__WEBPACK_IMPORTED_MODULE_10__["ProductoRoutedPlistComponent"]
      }, {
        path: 'producto/plist/:page',
        component: _component_producto_producto_routed_plist_producto_routed_plist_component__WEBPACK_IMPORTED_MODULE_10__["ProductoRoutedPlistComponent"]
      }, {
        path: 'producto/plist/:page/:rpp',
        component: _component_producto_producto_routed_plist_producto_routed_plist_component__WEBPACK_IMPORTED_MODULE_10__["ProductoRoutedPlistComponent"]
      }, {
        path: 'producto/plist/:page/:rpp/:sort',
        component: _component_producto_producto_routed_plist_producto_routed_plist_component__WEBPACK_IMPORTED_MODULE_10__["ProductoRoutedPlistComponent"]
      }, {
        path: 'producto/plist/:page/:rpp/:sort/:dir',
        component: _component_producto_producto_routed_plist_producto_routed_plist_component__WEBPACK_IMPORTED_MODULE_10__["ProductoRoutedPlistComponent"]
      }, {
        path: 'producto/plist/:page/:rpp/:sort/:dir/:filter',
        component: _component_producto_producto_routed_plist_producto_routed_plist_component__WEBPACK_IMPORTED_MODULE_10__["ProductoRoutedPlistComponent"]
      }, {
        path: 'producto/view/:id',
        component: _component_producto_producto_routed_view_producto_routed_view_component__WEBPACK_IMPORTED_MODULE_12__["ProductoRoutedViewComponent"]
      }, {
        path: 'producto/remove/:id',
        component: _component_producto_producto_routed_remove_producto_routed_remove_component__WEBPACK_IMPORTED_MODULE_11__["ProductoRoutedRemoveComponent"]
      }, {
        path: 'producto/new',
        component: _component_producto_producto_routed_new_producto_routed_new_component__WEBPACK_IMPORTED_MODULE_9__["ProductoRoutedNewComponent"]
      }, {
        path: 'producto/viewcontainer/:id',
        component: _component_producto_producto_routed_container_view_producto_routed_container_view_component__WEBPACK_IMPORTED_MODULE_8__["ProductoRoutedContainerViewComponent"]
      }, {
        path: 'producto-detail/:id',
        component: _component_producto_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"]
      }, {
        path: 'login',
        component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        resolve: {
          message: _resolve_session_resolve__WEBPACK_IMPORTED_MODULE_13__["SessionResolver"]
        }
      }, {
        path: 'logout',
        component: _component_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"],
        resolve: {
          message: _resolve_session_resolve__WEBPACK_IMPORTED_MODULE_13__["SessionResolver"]
        }
      }, {
        path: '**',
        component: _component_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_6__["NoPageFoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            //imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zu+5":
    /*!**************************************************!*\
      !*** ./src/app/component/menu/menu.component.ts ***!
      \**************************************************/

    /*! exports provided: MenuComponent */

    /***/
    function zu5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0() {
        return ["/login"];
      };

      function MenuComponent_li_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      }

      function MenuComponent_li_18_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Usuario: ", ctx_r3.oUsuarioSession.login, "");
        }
      }

      function MenuComponent_li_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MenuComponent_li_18_a_1_Template, 3, 1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.oUsuarioSession);
        }
      }

      var _c1 = function _c1() {
        return ["/logout"];
      };

      function MenuComponent_li_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c1));
        }
      }

      var _c2 = function _c2() {
        return ["/home"];
      };

      var _c3 = function _c3() {
        return ["/producto/plist"];
      };

      var MenuComponent = /*#__PURE__*/function () {
        function MenuComponent(router) {
          _classCallCheck(this, MenuComponent);

          this.router = router;
          this.oUsuarioSession = null; //console.log("menu component");

          this.oUsuarioSession = JSON.parse(localStorage.getItem("user") || '{}'); //console.log("-->", this.oUsuarioSession);
        }

        _createClass(MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MenuComponent;
      }();

      MenuComponent.??fac = function MenuComponent_Factory(t) {
        return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      MenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MenuComponent,
        selectors: [["app-menu"]],
        decls: 22,
        vars: 13,
        consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-light", "bg-light", "mb-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "w-100"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "fas", "fa-home"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "ml-auto"], ["ng-class", "fas fa-user-friends"], ["class", "nav-item", 4, "ngIf"], [1, "fas", "fa-user"], ["class", "nav-link", "href", "usuario/view/1", 4, "ngIf"], ["href", "usuario/view/1", 1, "nav-link"], ["ng-class", "fas fa-sign-out-alt"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "WILDCART");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Producto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, MenuComponent_li_16_Template, 4, 2, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](17, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, MenuComponent_li_18_Template, 2, 1, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, MenuComponent_li_20_Template, 4, 2, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](21, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](17, 5, ctx.oUsuarioSession) == "{}");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 7, ctx.oUsuarioSession) != "{}");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](21, 9, ctx.oUsuarioSession) != "{}");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map