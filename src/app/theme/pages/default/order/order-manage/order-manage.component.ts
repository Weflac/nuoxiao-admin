import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ScriptLoaderService } from '../../../../../_services/script-loader.service';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './order-manage.component.html',
  encapsulation: ViewEncapsulation.None
})
export class OrderManageComponent implements OnInit {

  rows = [
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
    { orderNumber: 'Austin', customer: 'Male', model: 'Swimlane', orderQuantity: 'Austin', osType: 'Male', createTime: 'Swimlane' },
  ];

  selected = [];

  size: number;
  totalPages: number;
  pageNumber: number;

  constructor(private _script: ScriptLoaderService) {
    this.pageNumber = 0;
    this.size = 20;
  }

  ngOnInit() {
    this.setPage();
  }

  setPage() {
    this.size = 15;
    this.totalPages = 27;
    this.pageNumber = 0;
  }

}
