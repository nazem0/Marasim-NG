import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsPageComponent } from './vendors-page.component';

describe('VendorsPageComponent', () => {
  let component: VendorsPageComponent;
  let fixture: ComponentFixture<VendorsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorsPageComponent]
    });
    fixture = TestBed.createComponent(VendorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
