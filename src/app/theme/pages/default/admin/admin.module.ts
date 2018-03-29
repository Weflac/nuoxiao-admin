import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';

// 组件
import { AdminComponent } from './admin.component';
import { OrganizationComponent } from './organization/organization.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';

import { DefaultComponent } from '../default.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { VisualSettingComponent } from './visual-setting/visual-setting.component';
import { TenantSettingComponent } from './tenant-setting/tenant-setting.component';
import { AuditComponent } from './audit/audit.component';
import { LogsComponent } from './logs/logs.component';

// 服务
import { AdminService } from './services/admin.service';



/**
 * Project：管理-用户权限管理设置
 * CreateTime：2017-12-08
 * Author：ObjectBin
 */

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: AdminComponent,
        children: [
          { path: 'organization', component: OrganizationComponent },
          { path: 'users', component: UsersComponent },
          { path: 'roles', component: RolesComponent },
          { path: 'subscription-management', component: SubscriptionComponent },
          { path: 'ui-customization', component: VisualSettingComponent },
          { path: 'tenantSettings', component: TenantSettingComponent },
          { path: 'audit', component: AuditComponent },
          { path: 'logs', component: LogsComponent },
        ]
      }
    ]
  }
];

@NgModule({
  providers: [ AdminService ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    FormsModule,
    HttpModule,
    LayoutModule
  ],
  declarations: [
    AdminComponent,
    OrganizationComponent,
    UsersComponent,
    RolesComponent,
    SubscriptionComponent,
    VisualSettingComponent,
    TenantSettingComponent,
    AuditComponent,
    LogsComponent
  ]
})
export class AdminModule { }
