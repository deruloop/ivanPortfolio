import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemnaDetailPageComponent } from './demna-detail.component';

describe('GalleryDetailComponent', () => {
  let component: DemnaDetailPageComponent;
  let fixture: ComponentFixture<DemnaDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemnaDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemnaDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
