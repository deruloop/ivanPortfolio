import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardSliderComponent } from '../../components/card-slider/card-slider.component';

@Component({
  selector: 'app-roundabout-detail-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './roundabout-detail.component.html',
  styleUrls: ['./roundabout-detail.component.scss']
})
export class RoundaboutDetailPageComponent implements OnInit {
  imageId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.imageId = this.route.snapshot.paramMap.get('id');
  }
}