import {
    ComponentFactoryResolver,
    ComponentFactory,
    ComponentRef,
    Type,
    Injector,
    Provider,
    ElementRef
} from '@angular/core';

export class ComponentLoader<T> {
    
    private _componentFactory: ComponentFactory<T>
    private _parent: Element
    private _providers: Provider[] = [];

    constructor(private _cfr: ComponentFactoryResolver, private _injector: Injector) {
    }

    attch(componentType: Type<T>): ComponentLoader<T> {
        this._componentFactory = this._cfr.resolveComponentFactory<T>(componentType);
        return this;
    }
    
    to(parent: string | ElementRef): ComponentLoader<T> {
        if (parent instanceof ElementRef) {
            this._parent = parent.nativeElement;
        } else {
            this._parent = document.querySelector(parent);
        }

        return this;
    }

    provider(provider: Provider) {
        this._providers.push(provider);
    }

    create(opts: {}): ComponentRef<T> {
        const injector = Injector.create(this._providers as any[], this._injector);
        const componentRef = this._componentFactory.create(injector);
        Object.assign(componentRef.instance, opts);
        if (this._parent) {
            this._parent.appendChild(componentRef.location.nativeElement);
        }
        componentRef.changeDetectorRef.markForCheck();
        componentRef.changeDetectorRef.detectChanges();
        return componentRef;
    }

    remove(ref:ComponentRef<T>){
        if(this._parent){
            this._parent.removeChild(ref.location.nativeElement)
        }
        ref=null;
    }

}
 