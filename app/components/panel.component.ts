import { Component, Input } from '@angular/core';

@Component({
  selector: 'panel',
  template: `
  <div class="panel panel-info">
    <div class="panel-heading" (click)="opened = !opened">
      {{title}}
    </div>
    <div class="panel-body" [ngClass]="{'hidden': !opened}">
      <ng-content></ng-content>
    </div>
  <div>
  `,
})
export class PanelComponent {
  @Input() title: string;
  opened = false;
}
