import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent {
  galleryItems = [
    { id: 1, title: 'Project A', description: 'Description of Project A', date: '2023', imageUrl: 'id1.png' },
    { id: 2, title: 'Project B', description: 'Description of Project B', date: '2023', imageUrl: 'id2.png' },
    { id: 3, title: 'Project B', description: 'Description of Project B', date: '2023', imageUrl: 'id1.png' },
    { id: 4, title: 'Project B', description: 'Description of Project B', date: '2023', imageUrl: 'id1.png' },
    { id: 5, title: 'Project B', description: 'Description of Project B', date: '2023', imageUrl: 'id1.png' },
  ];
}