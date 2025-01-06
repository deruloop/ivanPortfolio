import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardSliderComponent } from '../../components/card-slider/card-slider.component';

@Component({
  selector: 'app-demna-detail-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './demna-detail.component.html',
  styleUrls: ['./demna-detail.component.scss']
})
export class DemnaDetailPageComponent implements OnInit {
  imageId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.imageId = this.route.snapshot.paramMap.get('id');
  }
}