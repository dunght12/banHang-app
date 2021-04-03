import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTimKiemKHComponent } from './dialog-tim-kiem-kh.component';

describe('DialogTimKiemKHComponent', () => {
  let component: DialogTimKiemKHComponent;
  let fixture: ComponentFixture<DialogTimKiemKHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTimKiemKHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTimKiemKHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
