import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-item',
  template: `
    <h1>Gallery Item</h1>
    <p>Viewing item with ID: {{ itemId }}</p>
  `
})
export class GalleryItemComponent implements OnInit {
  itemId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
  }
}