import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <panel title="Hello Panel">this is a panel</panel>

    <card 
      title="Hello Card" 
      [opened]="opened"
      (toggle)="togglePanel()">
      this is a card
    </card>
  </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  opened = false;

  togglePanel() {
    this.opened = !this.opened;
  }
}
