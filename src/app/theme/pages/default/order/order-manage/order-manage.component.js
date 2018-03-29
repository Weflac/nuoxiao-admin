"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderManageComponent = (function () {
    function OrderManageComponent(_script) {
        this._script = _script;
        this.rows = [
            { name: 'Austin', gender: 'Male', company: 'Swimlane' },
            { name: 'Dany', gender: 'Male', company: 'KFC' },
            { name: 'Molly', gender: 'Female', company: 'Burger King' },
        ];
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
    }
    OrderManageComponent.prototype.ngOnInit = function () {
    };
    OrderManageComponent.prototype.ngAfterViewInit = function () {
        /*this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
          'assets/demo/default/custom/components/datatables/base/record-selection.js');*/
    };
    OrderManageComponent = __decorate([
        core_1.Component({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            templateUrl: './order-manage.component.html',
            styleUrls: ['../order.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], OrderManageComponent);
    return OrderManageComponent;
}());
exports.OrderManageComponent = OrderManageComponent;
