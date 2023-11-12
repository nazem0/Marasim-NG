import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterdComponent } from './filterd.component';

describe('FilterdComponent', () => {
  let component: FilterdComponent;
  let fixture: ComponentFixture<FilterdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterdComponent]
    });
    fixture = TestBed.createComponent(FilterdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
