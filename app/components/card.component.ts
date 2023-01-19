import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  template: `
  <div class="panel panel-info">
    <div class="panel-heading" (click)="toggle.emit()">
      {{title}}
    </div>
    <div class="panel-body" *ngIf="opened">
      <ng-content></ng-content>
    </div>
  <div>
  `,
})
export class CardComponent {
  @Input() opened: boolean = false;
  @Input() title: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
