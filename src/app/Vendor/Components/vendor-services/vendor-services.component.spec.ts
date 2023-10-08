import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorServicesComponent } from './vendor-services.component';

describe('VendorServicesComponent', () => {
  let component: VendorServicesComponent;
  let fixture: ComponentFixture<VendorServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorServicesComponent]
    });
    fixture = TestBed.createComponent(VendorServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
