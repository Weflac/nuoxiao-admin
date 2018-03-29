import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../../../auth/_guards/auth.guard';
import { DefaultComponent } from '../default.component';
import { OrderManageComponent } from './order-manage/order-manage.component';
import { OrderComponent } from './order.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: OrderComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'manage',
            component: OrderManageComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRouterModule {}
