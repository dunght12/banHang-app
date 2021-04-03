import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCfKMaiComponent } from './dialog-cf-kmai.component';

describe('DialogCfKMaiComponent', () => {
  let component: DialogCfKMaiComponent;
  let fixture: ComponentFixture<DialogCfKMaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCfKMaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCfKMaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
