import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUiComponent } from './customer-ui.component';

describe('CustomerUiComponent', () => {
  let component: CustomerUiComponent;
  let fixture: ComponentFixture<CustomerUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerUiComponent]
    });
    fixture = TestBed.createComponent(CustomerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
