import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTienThanhToanComponent } from './dialog-tien-thanh-toan.component';

describe('DialogTienThanhToanComponent', () => {
  let component: DialogTienThanhToanComponent;
  let fixture: ComponentFixture<DialogTienThanhToanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTienThanhToanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTienThanhToanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
