import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorFollowingVendorComponent } from './vendor-following-vendor.component';

describe('VendorFollowingVendorComponent', () => {
  let component: VendorFollowingVendorComponent;
  let fixture: ComponentFixture<VendorFollowingVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorFollowingVendorComponent]
    });
    fixture = TestBed.createComponent(VendorFollowingVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
