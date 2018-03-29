import { Injectable }           from '@angular/core';

import { HeroJobAdComponent }   from '../ad/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from '../ad/hero-profile/hero-profile.component';
import { AdItem }               from '../ad/ad.item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'Banner Success 1', bio: '第一条动态Banner Success通知'}),

      new AdItem(HeroProfileComponent, {name: 'Banner Success 2', bio: '第二条动态Banner Success通知'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Banner Info 1', body: '第一条动态Banner Info广告'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Banner Info 2', body: '第二条动态Banner Info广告'}),
    ];
  }
}
