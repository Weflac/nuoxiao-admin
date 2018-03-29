import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { OrderManageComponent } from './order-manage/order-manage.component';
import { OrderRouterModule } from './order.router.module';
import { OrderComponent } from './order.component';
import { LayoutModule } from '../../../layouts/layout.module';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    LayoutModule,
    OrderRouterModule
  ],
  declarations: [
    OrderComponent,
    OrderManageComponent
  ]
})
export class OrderModule { }
