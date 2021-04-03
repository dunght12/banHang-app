import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGiamGiaComponent } from './dialog-giam-gia.component';

describe('DialogGiamGiaComponent', () => {
  let component: DialogGiamGiaComponent;
  let fixture: ComponentFixture<DialogGiamGiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogGiamGiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGiamGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
