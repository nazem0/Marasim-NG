import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentModalComponent } from './attachment-modal.component';

describe('AttachmentModalComponent', () => {
  let component: AttachmentModalComponent;
  let fixture: ComponentFixture<AttachmentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttachmentModalComponent]
    });
    fixture = TestBed.createComponent(AttachmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
