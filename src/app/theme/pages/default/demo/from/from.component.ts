import { Component, OnInit } from '@angular/core';

import { User } from '../model/user.model';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  user: any = {};
  genders = [{ value: 'F', display: '女' }, { value: 'M', display: '男' }];

  roles = [{ value: 'admin', display: '管理员' }, { value: 'user', display: '普通用户' }];

  provinces = [
    { pk: 1, pv: '北京' },
    { pk: 16, pv: '福建' }
  ];

  citieData = [
    { pk: 1, ck: 72, cv: '朝阳区' }, { pk: 16, ck: 1315, cv: '厦门市' },
    { pk: 1, ck: 2801, cv: '西城区' }, { pk: 16, ck: 1303, cv: '福州市' },
    { pk: 1, ck: 2800, cv: '海淀区' }, { pk: 16, ck: 1332, cv: '泉州市' }
  ];

  cities = this.citieData.filter(city => city.pk == 16); // 默认福建省

  changeProvince(pk) {
    this.cities = this.citieData.filter((city) => city.pk == pk);
    this.user.city = this.cities[0].ck;
  }

  constructor() { }

  ngOnInit() {

    this.user = {
      name: '',
      gender: this.genders[0].value,
      role: this.roles[1].value,
      // theme: this.themes[0],
      isActive: false,
      hobbies: { 'music': true },
      // topics: [this.topics[1].value],
      province: 16, // 福建省
      city: 1315 // 厦门市
    };
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

  save() {    
    console.log(this.user);
  }

}
