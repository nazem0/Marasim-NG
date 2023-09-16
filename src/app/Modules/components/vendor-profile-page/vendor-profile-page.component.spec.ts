import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProfilePageComponent } from './vendor-profile-page.component';

describe('VendorProfilePageComponent', () => {
  let component: VendorProfilePageComponent;
  let fixture: ComponentFixture<VendorProfilePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorProfilePageComponent]
    });
    fixture = TestBed.createComponent(VendorProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
