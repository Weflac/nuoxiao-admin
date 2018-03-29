import { Directive, ElementRef, Renderer, Input, Output, Optional, EventEmitter } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[froalaView]'
})
export class FroalaViewDirective {

  private _element: HTMLElement;
  private _content: any;

  constructor(private renderer: Renderer, element: ElementRef) {
    this._element = element.nativeElement;
  }

  // update content model as it comes
  @Input() set froalaView(content: string){
    this._element.innerHTML = content;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.renderer.setElementClass(this._element, 'fr-view', true);
  }
}
