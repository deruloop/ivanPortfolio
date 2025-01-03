import { Component } from '@angular/core';
import { GalleryListComponent } from '../../components/gallery-list/gallery-list.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [GalleryListComponent],
  templateUrl: './gallery-home.component.html',
  styleUrls: ['./gallery-home.component.scss']
})
export class GalleryPageComponent {}