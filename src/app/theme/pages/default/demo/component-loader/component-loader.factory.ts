import {
    ComponentFactoryResolver,
    Injector,
    Injectable,
    ElementRef
} from '@angular/core';

import { ComponentLoader } from './component-loader.class';

@Injectable()
export class ComponentLoaderFactory {
    constructor(private _injector: Injector,
        private _cfr: ComponentFactoryResolver) {

    }

    create<T>(): ComponentLoader<T> {
        return new ComponentLoader(this._cfr, this._injector);
    }
}
 