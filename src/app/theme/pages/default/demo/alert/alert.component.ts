
// tslint:disable-next-line:max-line-length
import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewContainerRef,  ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';

import { AlertService } from '../services/alert.service';
import { MessageService } from '../services/message.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  name = 'nuoxiao';
  model: any = {};

  loading = false;

  @ViewChild('alertTip', { read: ViewContainerRef })
  alertTip: ViewContainerRef;

  constructor(
    private _script: ScriptLoaderService,
    private alertService: AlertService,
    private messageService: MessageService,
    private crf: ComponentFactoryResolver) { }

  ngOnInit() {

    this.showAlert('alertTip');
    this.alertService.error('测试, Tip提示');
    this.messageService.error('error,成功了!',200000);
    this.messageService.info('info,成功了!',10000);
    this.messageService.warning('warning,成功了!',8000);
    this.messageService.success('success,成功了!',6000);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/demo/default/custom/demo/form-controls.js');
  }

  save() {
    this.loading = true;

    this.showAlert('alertTip');
    this.alertService.error('测试');
    console.log("ok");

  }


  showAlert(target) {

    this[target].clear();
    let factory = this.crf.resolveComponentFactory(ChildComponent);
    let ref = this[target].createComponent(factory);

    ref.changeDetectorRef.detectChanges();

  }
}
