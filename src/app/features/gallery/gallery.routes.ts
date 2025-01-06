import { Routes } from '@angular/router';
import { GalleryPageComponent } from './pages/gallery-home/gallery-home.component';
import { RoundaboutDetailPageComponent } from './pages/roundabout-detail/roundabout-detail.component';
import { DemnaDetailPageComponent } from './pages/demna-detail/demna-detail.component';


export const GalleryRoutes: Routes = [
  { path: '', component: GalleryPageComponent },
  { path: 'roundabout', component: RoundaboutDetailPageComponent },
  { path: 'demna', component: DemnaDetailPageComponent }
];