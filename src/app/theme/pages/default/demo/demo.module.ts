import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
// 子组件
import { DefaultComponent } from '../default.component';
import { DemoComponent } from './demo.component';
import { EditorComponent } from './editor/editor.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ChartComponent } from './chart/chart.component';
import { FromComponent } from './from/from.component';
import { MapComponent } from './map/map.component';
import { AmapComponent } from './map/amap/amap.component';
import { ZtreeComponent } from './ztree/ztree.component';
import { AlertComponent } from './alert/alert.component';
import { ChildComponent } from './alert/child/child.component';
import { MessageComponent } from './message/message.component';
import { AdBannerComponent } from './ad/ad.banner.component';  
import { HeroJobAdComponent } from './ad/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './ad/hero-profile/hero-profile.component';
import { AdShowComponent } from './ad/ad.show.component';  
import { QrcodeComponent } from './qrcode/qrcode.component'; 

// 指令
import { EChartOptionDirective } from './chart/echarts-option.directive';
// import { FroalaEditorDirective } from './editor/editor.directive';
import { AdDirective }   from './ad/ad.directive';
// 模块
import { CKEditorModule } from 'ng2-ckeditor';
// import { FroalaEditorModule } from './editor/editor/index';
// import { FroalaViewModule } from './editor/view/index';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { PaginatorModule } from 'primeng/components/paginator/paginator';
// 服务
import { DemoService } from './services/demo.service';
import { AlertService } from './services/alert.service';
import { MessageService } from './services/message.service';
import { AdService }  from './services/ad.service';
// Factory
import { ComponentLoaderFactory } from './component-loader/component-loader.factory';

/**
 * Project：实例-简单教程
 * CreateTime：2018-02-15
 * Author：ObjectBin
 */

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DemoComponent,
        children: [
          { path: 'echart', component: ChartComponent },
          { path: 'editor', component: EditorComponent },
          { path: 'pagination', component: PaginationComponent },
          { path: 'from', component: FromComponent },
          { path: 'map', component: MapComponent },
          { path: 'ztree', component: ZtreeComponent },
          { path: 'alert', component: AlertComponent },
          { path: 'ad', component: AdShowComponent },
          { path: 'qr', component: QrcodeComponent },
        ]
      }
    ]
  }
];

@NgModule({
  providers: [
    DemoService,
    AlertService,
    MessageService,
    AdService,
    ComponentLoaderFactory 
  ], // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
  imports: [
    CommonModule, RouterModule.forChild(routes),
    FormsModule,
    HttpModule,
    LayoutModule,
    CKEditorModule,
    PaginatorModule
  ],
  declarations: [
    EChartOptionDirective,
    AdDirective,
    // FroalaEditorDirective,
    DemoComponent,
    ChartComponent,
    EditorComponent,
    FromComponent,
    MapComponent,
    AmapComponent,
    ZtreeComponent,
    AlertComponent,
    ChildComponent,
    MessageComponent,
    AdShowComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    QrcodeComponent,
    PaginationComponent,
  ],
  entryComponents: [
    ChildComponent,
    MessageComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
  ],
  exports: [ MessageComponent ]
})
export class DemoModule { }
