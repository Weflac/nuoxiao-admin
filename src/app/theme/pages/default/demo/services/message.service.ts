import { Injectable,Injector} from '@angular/core';
import { ComponentLoaderFactory } from '../component-loader/component-loader.factory';
import { ComponentLoader } from '../component-loader/component-loader.class';
import { MessageComponent } from '../message/message.component';

@Injectable()
export class MessageService {
    private loader:ComponentLoader<MessageComponent>

    constructor(private _clf:ComponentLoaderFactory, private _injector:Injector) {
        this.loader=this._clf.create<MessageComponent>();
    }

    public info(payload,duration?) {
        this.createMessage('info',payload,duration);
    }
    public success(payload,duration?) {
        this.createMessage('success',payload,duration);
    }
    public error(payload,duration?) {
        this.createMessage('error',payload,duration);
    }
    public warning(payload,duration?) {
        this.createMessage('warning',payload,duration);
    }

    /**
     * 创建消息框
     * @param title 标题
     * @param content 内容
     * @param duration 时长
     */
    private createMessage(title, content, duration=3000) {
        this.loader.attch(MessageComponent).to('body');
        const opts = {
            msgType: title,
            payload: content
        };
        const ref = this.loader.create(opts);
        ref.changeDetectorRef.markForCheck();
        ref.changeDetectorRef.detectChanges();
        let self=this;
        let st = setTimeout(() => {
            self.loader.remove(ref);
            st = null;
        }, duration);
    }
    
}
 