import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundaboutDetailPageComponent } from './roundabout-detail.component';

describe('GalleryDetailComponent', () => {
  let component: RoundaboutDetailPageComponent;
  let fixture: ComponentFixture<RoundaboutDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundaboutDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundaboutDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
