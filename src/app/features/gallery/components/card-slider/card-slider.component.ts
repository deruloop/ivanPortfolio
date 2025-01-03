import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent {
  cards = [
    { title: 'Card 1', description: 'Description 1', image: 'image1.png' },
    { title: 'Card 2', description: 'Description 2', image: 'image2.jpg' },
    { title: 'Card 3', description: 'Description 3', image: 'image3.jpg' }
  ];
}