import { Component, OnInit, OnDestroy, Inject, Renderer2, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutPageComponent {
  constructor(
    private route: ActivatedRoute, 
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // This block runs only in the browser
      this.renderer.addClass(document.body, 'about');
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Cleanup when the component is destroyed
      this.renderer.removeClass(document.body, 'about');
    }
  }
}