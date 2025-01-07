import { Component, OnInit, OnDestroy, Inject, Renderer2, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardSliderComponent } from '../../components/card-slider/card-slider.component';

@Component({
  selector: 'app-demna-detail-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './demna-detail.component.html',
  styleUrls: ['./demna-detail.component.scss']
})
export class DemnaDetailPageComponent implements OnInit, OnDestroy {
  imageId: string | null = null;

  constructor(
    private route: ActivatedRoute, 
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.imageId = this.route.snapshot.paramMap.get('id');
    if (isPlatformBrowser(this.platformId)) {
      // This block runs only in the browser
      this.renderer.addClass(document.body, 'no-scroll');
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Cleanup when the component is destroyed
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
}