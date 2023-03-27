"use strict";
(self["webpackChunksmartlog_mobile"] = self["webpackChunksmartlog_mobile"] || []).push([["src_app_modules_herramientas_herramientas_module_ts"],{

/***/ 39561:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/herramientas/carga-entrada/carga-entrada.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargaEntradaComponent": () => (/* binding */ CargaEntradaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Fernando_Developer_Desktop_Proyectos_Trabajo_Bis_smartlog_mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _shared_classes_httpError_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/classes/httpError.class */ 12438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_dialog_dialog_v2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dialog/dialog-v2.service */ 56156);
/* harmony import */ var _services_mobile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/mobile.service */ 59471);
/* harmony import */ var _listado_entradas_listado_entradas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listado-entradas/listado-entradas.component */ 45358);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);







class CargaEntradaComponent {
  constructor(ds, ms) {
    this.ds = ds;
    this.ms = ms;
    this.entradas = [];
    this.entradasDia = [];
  }

  ngOnInit() {
    this.getReferencias();
  }

  getReferencias() {
    var _this = this;

    return (0,C_Users_Fernando_Developer_Desktop_Proyectos_Trabajo_Bis_smartlog_mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {// let entradas = <any>await this.ms.
      } catch (err) {
        let error = new _shared_classes_httpError_class__WEBPACK_IMPORTED_MODULE_1__.HttpError(err);

        _this.ds.showSnack(error.message || 'Ocurrio un problema', '', 'error');
      }
    })();
  }

  handleQr() {
    return (0,C_Users_Fernando_Developer_Desktop_Proyectos_Trabajo_Bis_smartlog_mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {} catch (err) {
        throw err;
      }
    })();
  }

}

CargaEntradaComponent.ɵfac = function CargaEntradaComponent_Factory(t) {
  return new (t || CargaEntradaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_dialog_dialog_v2_service__WEBPACK_IMPORTED_MODULE_2__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_mobile_service__WEBPACK_IMPORTED_MODULE_3__.MobileService));
};

CargaEntradaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CargaEntradaComponent,
  selectors: [["app-carga-entrada"]],
  decls: 11,
  vars: 3,
  consts: [[1, "container_entradas"], [1, "row"], [1, "col", "s12", "l6"], [3, "entradas", "icon", "onClickIcon"], [3, "entradas"], [1, "container_menu_dashboard"], [1, "container_menu_items"], [1, "container_menu_item"], ["[(ngModel)", "aplicaOSD"]],
  template: function CargaEntradaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-listado-entradas", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClickIcon", function CargaEntradaComponent_Template_app_listado_entradas_onClickIcon_3_listener() {
        return ctx.handleQr();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-listado-entradas", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-slide-toggle", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " OS&D ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("entradas", ctx.entradas)("icon", "qr_code_scanner");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("entradas", ctx.entradasDia);
    }
  },
  directives: [_listado_entradas_listado_entradas_component__WEBPACK_IMPORTED_MODULE_4__.ListadoEntradasComponent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__.MatSlideToggle],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJnYS1lbnRyYWRhLmNvbXBvbmVudC5zYXNzIn0= */"]
});

/***/ }),

/***/ 73630:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/herramientas/decarga-detalle/decarga-detalle.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecargaDetalleComponent": () => (/* binding */ DecargaDetalleComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Fernando_Developer_Desktop_Proyectos_Trabajo_Bis_smartlog_mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_dialog_dialog_v2_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dialog/dialog-v2.service */ 56156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _shared_components_common_images_images_preview_images_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/common/images/images-preview/images-preview.component */ 74401);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);







class DecargaDetalleComponent {
  constructor(_ds) {
    this._ds = _ds;
    this.aplicaOSD = false;
    this.archivos = [];
    this.isLoadingArchivos = false;
    this.fotosArribo = [];
    this.fotosPaletas = [];
  }

  ngOnInit() {}

  getFile(idTipoDocumento) {
    return this.archivos.find(archivo => archivo.idTipoDocumento === idTipoDocumento) ? [this.archivos.find(archivo => archivo.idTipoDocumento === idTipoDocumento)] : [];
  }

  handleChangeFilesArribo({
    archivos,
    accion
  }) {
    var _this = this;

    return (0,C_Users_Fernando_Developer_Desktop_Proyectos_Trabajo_Bis_smartlog_mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let archivo = { ...archivos[0]
        };

        if (accion === 'deleted') {
          _this.fotosArribo = _this.fotosArribo.filter(i => i.id !== archivo.id);
        }

        if (accion === 'change') {
          _this.fotosArribo = archivos;
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }

  handleChangeFilesPaletas({
    archivos,
    accion
  }) {
    var _this2 = this;

    return (0,C_Users_Fernando_Developer_Desktop_Proyectos_Trabajo_Bis_smartlog_mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let archivo = { ...archivos[0]
        };

        if (accion === 'deleted') {
          _this2.fotosPaletas = _this2.fotosPaletas.filter(i => i.id !== archivo.id);
        }

        if (accion === 'change') {
          _this2.fotosPaletas = archivos;
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }

}

DecargaDetalleComponent.ɵfac = function DecargaDetalleComponent_Factory(t) {
  return new (t || DecargaDetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_dialog_dialog_v2_service__WEBPACK_IMPORTED_MODULE_1__.DialogService));
};

DecargaDetalleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DecargaDetalleComponent,
  selectors: [["app-decarga-detalle"]],
  decls: 23,
  vars: 3,
  consts: [[1, "container_detalle"], [1, "container_menu_flotante", "menu_top"], [1, "container_menu_items"], ["color", "primary", "mat-stroked-button", ""], [1, "row"], [1, "col", "s12", "l6"], [1, "title_container"], [1, "title_images"], [3, "images", "onChangeFiles"], [1, "container_menu_flotante", "menu_bottom"], [1, "container_menu_item"], [3, "ngModel", "ngModelChange"]],
  template: function DecargaDetalleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Bultos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "FOTOS DE ARRIBO DENTRO CAMION");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "app-images-preview", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangeFiles", function DecargaDetalleComponent_Template_app_images_preview_onChangeFiles_10_listener($event) {
        return ctx.handleChangeFilesArribo($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "FOTOS PALETAS");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "app-images-preview", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangeFiles", function DecargaDetalleComponent_Template_app_images_preview_onChangeFiles_15_listener($event) {
        return ctx.handleChangeFilesPaletas($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-slide-toggle", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DecargaDetalleComponent_Template_mat_slide_toggle_ngModelChange_19_listener($event) {
        return ctx.aplicaOSD = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " OS&D ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Finalizar Descarga");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.fotosArribo);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.fotosPaletas);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.aplicaOSD);
    }
  },
  directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _shared_components_common_images_images_preview_images_preview_component__WEBPACK_IMPORTED_MODULE_2__.ImagesPreviewComponent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel],
  styles: [".container_detalle[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: auto;\n  position: relative;\n}\n\n.title_container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.title_images[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  width: 100%;\n  max-width: 350px;\n}\n\n.container_menu_flotante[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #fff;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container_menu_items[_ngcontent-%COMP%] {\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  padding: 15px 0px;\n  width: 100%;\n  max-width: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.container_menu_item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n}\n\n.container_menu_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.menu_top[_ngcontent-%COMP%] {\n  top: 0;\n}\n\n.menu_bottom[_ngcontent-%COMP%] {\n  bottom: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2FyZ2EtZGV0YWxsZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3RkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUlKOztBQUZBO0VBQ0ksd0ZBQUE7RUFFQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFKSTtFQUNJLGVBQUE7QUFNUjs7QUFKQTtFQUNJLE1BQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7QUFRSiIsImZpbGUiOiJkZWNhcmdhLWRldGFsbGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyX2RldGFsbGVcclxuICAgIGhlaWdodDogMTAwdmhcclxuICAgIG92ZXJmbG93OiBhdXRvXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuXHJcbi50aXRsZV9jb250YWluZXJcclxuICAgIG1hcmdpbi10b3A6IDUwcHhcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICBcclxuLnRpdGxlX2ltYWdlc1xyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMnB4IDVweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweFxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIG1heC13aWR0aDogMzUwcHhcclxuXHJcbi5jb250YWluZXJfbWVudV9mbG90YW50ZVxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuXHJcbi5jb250YWluZXJfbWVudV9pdGVtc1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMnB4IDVweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweFxyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTBweFxyXG4gICAgcGFkZGluZzogMTVweCAwcHhcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4XHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZFxyXG5cclxuLmNvbnRhaW5lcl9tZW51X2l0ZW1cclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgc3BhblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweFxyXG5cclxuLm1lbnVfdG9wXHJcbiAgICB0b3A6IDBcclxuXHJcbi5tZW51X2JvdHRvbVxyXG4gICAgYm90dG9tOiA2MHB4Il19 */"]
});

/***/ }),

/***/ 53223:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/herramientas/descarga-entrada/descarga-entrada.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescargaEntradaComponent": () => (/* binding */ DescargaEntradaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Fernando_Developer_Desktop_Proyectos_Trabajo_Bis_smartlog_mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _shared_classes_httpError_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/classes/httpError.class */ 12438);
/* harmony import */ var _shared_components_common_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/common/scanner/scanner.component */ 65239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_dialog_dialog_v2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dialog/dialog-v2.service */ 56156);
/* harmony import */ var _services_mobile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/mobile.service */ 59471);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _listado_entradas_listado_entradas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../listado-entradas/listado-entradas.component */ 45358);








class DescargaEntradaComponent {
  constructor(ds, ms, router) {
    this.ds = ds;
    this.ms = ms;
    this.router = router;
    this.entradas = [];
    this.entradasDia = [];
  }

  ngOnInit() {
    this.getReferencias();
  }

  getReferencias() {
    var _this = this;

    return (0,C_Users_Fernando_Developer_Desktop_Proyectos_Trabajo_Bis_smartlog_mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let entradas = yield _this.ms.getEntradasDescargas();
        _this.entradas = entradas === null || entradas === void 0 ? void 0 : entradas.entradas.map(e => {
          var _a;

          return { ...e,
            Evento: e.Estatus.idEstatus === 2 ? {
              fecha: e.fechaArribo
            } : ((_a = e.Eventos) === null || _a === void 0 ? void 0 : _a.length) ? e.Eventos[0] : {}
          };
        });
        _this.entradasDia = entradas === null || entradas === void 0 ? void 0 : entradas.entradasDia.map(e => ({ ...e,
          Evento: e === null || e === void 0 ? void 0 : e.Eventos[0]
        }));
      } catch (err) {
        console.log(err);
        let error = new _shared_classes_httpError_class__WEBPACK_IMPORTED_MODULE_1__.HttpError(err);

        _this.ds.showSnack(error.message || 'Ocurrio un problema', '', 'error');
      }
    })();
  }

  handleQr(entrada) {
    var _this2 = this;

    return (0,C_Users_Fernando_Developer_Desktop_Proyectos_Trabajo_Bis_smartlog_mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if ((entrada === null || entrada === void 0 ? void 0 : entrada.Estatus.idEstatus) === 2) {
          let qrEntrada = yield _this2.ds.openModalFullComponent(_shared_components_common_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_2__.ScannerComponent);
          if (!qrEntrada) return;
          if (qrEntrada !== entrada.entrada) return _this2.ds.showSnack('El qr no pertenece a la referencia seleccionada.', '', 'error');
          let updateEntrada = yield _this2.ms.patchEntrada(entrada.idEntrada, {
            accion: 'INI-DESCARGA'
          });
          entrada.Estatus = updateEntrada.Estatus;
          entrada.Evento = updateEntrada.Evento;
        }

        _this2.router.navigate(['herramientas', 'descarga', 'detalle', entrada.idEntrada]);
      } catch (err) {
        let error = new _shared_classes_httpError_class__WEBPACK_IMPORTED_MODULE_1__.HttpError(err);

        _this2.ds.showSnack(error.message || 'Ocurrio un problema', '', 'error');
      }
    })();
  }

}

DescargaEntradaComponent.ɵfac = function DescargaEntradaComponent_Factory(t) {
  return new (t || DescargaEntradaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_dialog_dialog_v2_service__WEBPACK_IMPORTED_MODULE_3__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_mobile_service__WEBPACK_IMPORTED_MODULE_4__.MobileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};

DescargaEntradaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DescargaEntradaComponent,
  selectors: [["app-descarga-entrada"]],
  decls: 8,
  vars: 2,
  consts: [[1, "container_entradas"], [1, "container_entradas_navbar"], [1, "row"], [1, "col", "s12", "m6", "l6", 2, "padding", "0"], [3, "entradas", "onClickIcon"], [1, "separator_listado"], [3, "entradas"]],
  template: function DescargaEntradaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-listado-entradas", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClickIcon", function DescargaEntradaComponent_Template_app_listado_entradas_onClickIcon_4_listener($event) {
        return ctx.handleQr($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-listado-entradas", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("entradas", ctx.entradas);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("entradas", ctx.entradasDia);
    }
  },
  directives: [_listado_entradas_listado_entradas_component__WEBPACK_IMPORTED_MODULE_5__.ListadoEntradasComponent],
  styles: [".separator_listado[_ngcontent-%COMP%] {\n  display: block;\n  height: 40px;\n  background-color: #f3f3f3;\n}\n@media only screen and (min-width: 600px) {\n  .separator_listado[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2NhcmdhLWVudHJhZGEuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFBSTtFQUpKO0lBS1EsYUFBQTtFQUdOO0FBQ0YiLCJmaWxlIjoiZGVzY2FyZ2EtZW50cmFkYS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXBhcmF0b3JfbGlzdGFkb1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxuICAgIGhlaWdodDogNDBweFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmM1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcclxuICAgICAgICBkaXNwbGF5OiBub25lIl19 */"]
});

/***/ }),

/***/ 92349:
/*!*********************************************************************!*\
  !*** ./src/app/modules/herramientas/herramientas-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HerramientasRoutingModule": () => (/* binding */ HerramientasRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _carga_entrada_carga_entrada_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carga-entrada/carga-entrada.component */ 39561);
/* harmony import */ var _descarga_entrada_descarga_entrada_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descarga-entrada/descarga-entrada.component */ 53223);
/* harmony import */ var _decarga_detalle_decarga_detalle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decarga-detalle/decarga-detalle.component */ 73630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: 'carga', component: _carga_entrada_carga_entrada_component__WEBPACK_IMPORTED_MODULE_0__.CargaEntradaComponent },
    { path: 'descarga/detalle/:idEntrada', component: _decarga_detalle_decarga_detalle_component__WEBPACK_IMPORTED_MODULE_2__.DecargaDetalleComponent },
    { path: 'descarga', component: _descarga_entrada_descarga_entrada_component__WEBPACK_IMPORTED_MODULE_1__.DescargaEntradaComponent },
];
class HerramientasRoutingModule {
}
HerramientasRoutingModule.ɵfac = function HerramientasRoutingModule_Factory(t) { return new (t || HerramientasRoutingModule)(); };
HerramientasRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HerramientasRoutingModule });
HerramientasRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HerramientasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 61888:
/*!*************************************************************!*\
  !*** ./src/app/modules/herramientas/herramientas.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HerramientasModule": () => (/* binding */ HerramientasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _herramientas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./herramientas-routing.module */ 92349);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _carga_entrada_carga_entrada_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carga-entrada/carga-entrada.component */ 39561);
/* harmony import */ var _descarga_entrada_descarga_entrada_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./descarga-entrada/descarga-entrada.component */ 53223);
/* harmony import */ var _listado_entradas_listado_entradas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listado-entradas/listado-entradas.component */ 45358);
/* harmony import */ var _decarga_detalle_decarga_detalle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decarga-detalle/decarga-detalle.component */ 73630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








class HerramientasModule {
}
HerramientasModule.ɵfac = function HerramientasModule_Factory(t) { return new (t || HerramientasModule)(); };
HerramientasModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: HerramientasModule });
HerramientasModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _herramientas_routing_module__WEBPACK_IMPORTED_MODULE_0__.HerramientasRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HerramientasModule, { declarations: [_carga_entrada_carga_entrada_component__WEBPACK_IMPORTED_MODULE_2__.CargaEntradaComponent,
        _descarga_entrada_descarga_entrada_component__WEBPACK_IMPORTED_MODULE_3__.DescargaEntradaComponent,
        _listado_entradas_listado_entradas_component__WEBPACK_IMPORTED_MODULE_4__.ListadoEntradasComponent,
        _decarga_detalle_decarga_detalle_component__WEBPACK_IMPORTED_MODULE_5__.DecargaDetalleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _herramientas_routing_module__WEBPACK_IMPORTED_MODULE_0__.HerramientasRoutingModule] }); })();


/***/ }),

/***/ 45358:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/herramientas/listado-entradas/listado-entradas.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoEntradasComponent": () => (/* binding */ ListadoEntradasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 65590);




function ListadoEntradasComponent_div_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entrada_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entrada_r1.Estatus.nombre);
} }
function ListadoEntradasComponent_div_2_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entrada_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, entrada_r1 == null ? null : entrada_r1.Evento == null ? null : entrada_r1.Evento.fecha, "dd/MM/yyyy"));
} }
function ListadoEntradasComponent_div_2_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoEntradasComponent_div_2_mat_icon_12_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const entrada_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onClickIcon.emit(entrada_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "qr_code_scanner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListadoEntradasComponent_div_2_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoEntradasComponent_div_2_mat_icon_13_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const entrada_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onClickIcon.emit(entrada_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [2, 3, 4]; };
function ListadoEntradasComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListadoEntradasComponent_div_2_span_8_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListadoEntradasComponent_div_2_span_10_Template, 3, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListadoEntradasComponent_div_2_mat_icon_12_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListadoEntradasComponent_div_2_mat_icon_13_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entrada_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entrada_r1.entrada);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0).includes(entrada_r1.Estatus.idEstatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entrada_r1 == null ? null : entrada_r1.Evento);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (entrada_r1 == null ? null : entrada_r1.Estatus == null ? null : entrada_r1.Estatus.idEstatus) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (entrada_r1 == null ? null : entrada_r1.Estatus == null ? null : entrada_r1.Estatus.idEstatus) === 3);
} }
class ListadoEntradasComponent {
    constructor() {
        this.entradas = [];
        this.icon = '';
        this.onClickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
}
ListadoEntradasComponent.ɵfac = function ListadoEntradasComponent_Factory(t) { return new (t || ListadoEntradasComponent)(); };
ListadoEntradasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadoEntradasComponent, selectors: [["app-listado-entradas"]], inputs: { entradas: "entradas", icon: "icon" }, outputs: { onClickIcon: "onClickIcon" }, decls: 3, vars: 1, consts: [[1, "container_listado"], [1, "container_listado_overflow"], ["class", "container_listado_item", 4, "ngFor", "ngForOf"], [1, "container_listado_item"], [1, "listado_item_info"], [1, "lista_item_text"], [2, "width", "100%"], [2, "width", "80px"], ["class", "lista_item_date", 4, "ngIf"], [1, "spacer"], [3, "click", 4, "ngIf"], [1, "lista_item_date"], [3, "click"]], template: function ListadoEntradasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListadoEntradasComponent_div_2_Template, 14, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.entradas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe], styles: [".container_listado[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container_listado_overflow[_ngcontent-%COMP%] {\n  overflow-x: none;\n  overflow-y: auto;\n}\n\n.container_listado_item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.listado_item_info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.lista_item_date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.listado_item_subInfo[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZG8tZW50cmFkYXMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7QUFNSiIsImZpbGUiOiJsaXN0YWRvLWVudHJhZGFzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9saXN0YWRvXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgaGVpZ2h0OiAxMDAlXHJcblxyXG4uY29udGFpbmVyX2xpc3RhZG9fb3ZlcmZsb3dcclxuICAgIG92ZXJmbG93LXg6IG5vbmVcclxuICAgIG92ZXJmbG93LXk6IGF1dG9cclxuXHJcbi5jb250YWluZXJfbGlzdGFkb19pdGVtXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHhcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSlcclxuXHJcbi5saXN0YWRvX2l0ZW1faW5mb1xyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG5cclxuLmxpc3RhX2l0ZW1fZGF0ZVxyXG4gICAgZm9udC1zaXplOiAxM3B4XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpXHJcblxyXG4ubGlzdGFkb19pdGVtX3N1YkluZm9cclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICAgICAgIl19 */"] });


/***/ }),

/***/ 59471:
/*!********************************************!*\
  !*** ./src/app/services/mobile.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileService": () => (/* binding */ MobileService)
/* harmony export */ });
/* harmony import */ var C_Users_Fernando_Developer_Desktop_Proyectos_Trabajo_Bis_smartlog_mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _config_url_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/url.services */ 39800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario/usuario.service */ 14468);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





class MobileService {
  constructor(_us, _http) {
    this._us = _us;
    this._http = _http;
  }

  getEntradasDescargas() {
    var _this = this;

    return (0,C_Users_Fernando_Developer_Desktop_Proyectos_Trabajo_Bis_smartlog_mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let response = yield _this._http.get(`${_config_url_services__WEBPACK_IMPORTED_MODULE_1__.URL}/mobile/entrada/descarga`).toPromise();
      return response;
    })();
  }

  getEntradasCargadas() {
    var _this2 = this;

    return (0,C_Users_Fernando_Developer_Desktop_Proyectos_Trabajo_Bis_smartlog_mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let response = yield _this2._http.get(`${_config_url_services__WEBPACK_IMPORTED_MODULE_1__.URL}/mobile/entrada/carga`).toPromise();
      return response;
    })();
  }

  patchEntrada(entrada, data) {
    var _this3 = this;

    return (0,C_Users_Fernando_Developer_Desktop_Proyectos_Trabajo_Bis_smartlog_mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let response = yield _this3._http.post(`${_config_url_services__WEBPACK_IMPORTED_MODULE_1__.URL}/mobile/entrada/${entrada}`, data).toPromise();
      return response;
    })();
  }

}

MobileService.ɵfac = function MobileService_Factory(t) {
  return new (t || MobileService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

MobileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: MobileService,
  factory: MobileService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_herramientas_herramientas_module_ts.js.map