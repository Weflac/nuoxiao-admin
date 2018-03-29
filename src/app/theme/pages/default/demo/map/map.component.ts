import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';
import { AmapComponent } from './amap/amap.component'; 

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  animations:[flyIn]
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
