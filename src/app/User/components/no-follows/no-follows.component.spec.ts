import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFollowsComponent } from './no-follows.component';

describe('NoFollowsComponent', () => {
  let component: NoFollowsComponent;
  let fixture: ComponentFixture<NoFollowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoFollowsComponent]
    });
    fixture = TestBed.createComponent(NoFollowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
