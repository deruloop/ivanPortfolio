import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardSliderComponent } from '../../components/card-slider/card-slider.component';

@Component({
  selector: 'app-gallery-detail-page',
  standalone: true,
  imports: [CardSliderComponent],
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailPageComponent implements OnInit {
  imageId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.imageId = this.route.snapshot.paramMap.get('id');
  }
}