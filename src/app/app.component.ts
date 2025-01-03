import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule,RouterModule],
})
export class AppComponent {
  buttons = [
    { id: 1, label: 'Bottone 1', expanded: false, content: 'Contenuto extra per Bottone 1' },
    { id: 2, label: 'Bottone 2', expanded: false, content: 'Contenuto extra per Bottone 2' },
  ];

  toggleButton(id: number): void {
    this.buttons = this.buttons.map((button) =>
      button.id === id ? { ...button, expanded: !button.expanded } : button
    );
  }
}