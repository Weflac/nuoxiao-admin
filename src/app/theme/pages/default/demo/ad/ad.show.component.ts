import { Component, OnInit } from '@angular/core';

import { AdItem } from './ad.item'
import { AdService } from '../services/ad.service';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  template: `<div>
                <app-add-banner [ads]="ads"></app-add-banner>
            </div>
            `
})
export class AdShowComponent implements OnInit {
  
  ads: AdItem[];

  constructor(private adService: AdService) { }

  ngOnInit() {
    // 获取广告模板
    this.ads=this.adService.getAds();
  }

}
