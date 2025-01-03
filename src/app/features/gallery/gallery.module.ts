import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GalleryRoutes } from './gallery.routes';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { CardSliderComponent } from './components/card-slider/card-slider.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GalleryRoutes),
    // GalleryListComponent, GalleryItemComponent, CardSliderComponent
  ]
})
export class GalleryModule {}