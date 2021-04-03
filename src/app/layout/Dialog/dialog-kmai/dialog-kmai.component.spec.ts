import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogKMaiComponent } from './dialog-kmai.component';

describe('DialogKMaiComponent', () => {
  let component: DialogKMaiComponent;
  let fixture: ComponentFixture<DialogKMaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogKMaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogKMaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
