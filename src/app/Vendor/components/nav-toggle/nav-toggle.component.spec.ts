import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavToggleComponent } from './nav-toggle.component';

describe('NavToggleComponent', () => {
  let component: NavToggleComponent;
  let fixture: ComponentFixture<NavToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavToggleComponent]
    });
    fixture = TestBed.createComponent(NavToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
