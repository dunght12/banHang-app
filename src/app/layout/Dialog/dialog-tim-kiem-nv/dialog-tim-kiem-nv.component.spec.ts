import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTimKiemNVComponent } from './dialog-tim-kiem-nv.component';

describe('DialogTimKiemNVComponent', () => {
  let component: DialogTimKiemNVComponent;
  let fixture: ComponentFixture<DialogTimKiemNVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTimKiemNVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTimKiemNVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
