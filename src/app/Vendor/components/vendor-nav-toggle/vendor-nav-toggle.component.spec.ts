import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorNavToggleComponent } from './vendor-nav-toggle.component';

describe('VendorNavToggleComponent', () => {
  let component: VendorNavToggleComponent;
  let fixture: ComponentFixture<VendorNavToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorNavToggleComponent]
    });
    fixture = TestBed.createComponent(VendorNavToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
