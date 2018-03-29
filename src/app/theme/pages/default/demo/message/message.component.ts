import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';

// 样式映射
const mapping= {
  success:'fa-check',
   warning:'fa-star-o',
   error:'fa-remove',
   info:'fa-heart'
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit {
  
  public typeClass;

  public typeIconClass;
  
  @Input() msgType:'success' | 'info' | 'warning' | 'error'='info'

  @Input() payload:string = ''

  constructor() { }

  ngOnInit(): void {
    this.typeClass=['upc-message-' + this.msgType];
    this.typeIconClass=[mapping[this.msgType]];
  }

}
