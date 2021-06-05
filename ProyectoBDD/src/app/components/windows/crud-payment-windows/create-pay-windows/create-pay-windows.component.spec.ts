import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayWindowsComponent } from './create-pay-windows.component';

describe('CreatePayWindowsComponent', () => {
  let component: CreatePayWindowsComponent;
  let fixture: ComponentFixture<CreatePayWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePayWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePayWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
