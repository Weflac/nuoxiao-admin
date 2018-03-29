import { Directive, ElementRef, Renderer, HostListener, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'echart'
})
export class EChartOptionDirective implements OnInit {

    @Input('chartType')
    chartType: any; // 输入属性，用于设置元素数据展示

    constructor(private elementRef: ElementRef, private renderer: Renderer) {}

    public ngOnInit(): void {
        echarts.init(this.elementRef.nativeElement).setOption(this.chartType);
    }

    @HostListener('click')
    onClick() { // 监听宿主元素的点击事件
    }


}
