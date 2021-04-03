import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTtinKHComponent } from './dialog-ttin-kh.component';

describe('DialogTtinKHComponent', () => {
  let component: DialogTtinKHComponent;
  let fixture: ComponentFixture<DialogTtinKHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTtinKHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTtinKHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
