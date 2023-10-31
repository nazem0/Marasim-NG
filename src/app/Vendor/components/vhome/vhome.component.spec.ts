import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhomeComponent } from './vhome.component';

describe('VhomeComponent', () => {
  let component: VhomeComponent;
  let fixture: ComponentFixture<VhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VhomeComponent]
    });
    fixture = TestBed.createComponent(VhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
