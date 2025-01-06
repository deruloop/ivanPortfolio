import { Routes } from '@angular/router';
import { GalleryPageComponent } from './pages/gallery-home/gallery-home.component';
import { GalleryDetailPageComponent } from './pages/gallery-detail/gallery-detail.component';

export const GalleryRoutes: Routes = [
  { path: '', component: GalleryPageComponent },
  {
    path: 'detail',
    children: [
      { path: ':description', component: GalleryDetailPageComponent }
    ]
  }
];