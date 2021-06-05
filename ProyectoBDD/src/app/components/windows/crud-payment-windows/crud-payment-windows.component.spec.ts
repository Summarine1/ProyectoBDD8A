import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPaymentWindowsComponent } from './crud-payment-windows.component';

describe('CrudPaymentWindowsComponent', () => {
  let component: CrudPaymentWindowsComponent;
  let fixture: ComponentFixture<CrudPaymentWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPaymentWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPaymentWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
