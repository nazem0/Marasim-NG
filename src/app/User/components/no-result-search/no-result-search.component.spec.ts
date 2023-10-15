import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultSearchComponent } from './no-result-search.component';

describe('NoResultSearchComponent', () => {
  let component: NoResultSearchComponent;
  let fixture: ComponentFixture<NoResultSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoResultSearchComponent]
    });
    fixture = TestBed.createComponent(NoResultSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
