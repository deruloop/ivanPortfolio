import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDetailPageComponent } from './gallery-detail.component';

describe('GalleryDetailComponent', () => {
  let component: GalleryDetailPageComponent;
  let fixture: ComponentFixture<GalleryDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
