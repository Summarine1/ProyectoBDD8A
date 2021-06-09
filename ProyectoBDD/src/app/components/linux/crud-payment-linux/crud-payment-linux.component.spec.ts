import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPaymentLinuxComponent } from './crud-payment-linux.component';

describe('CrudPaymentLinuxComponent', () => {
  let component: CrudPaymentLinuxComponent;
  let fixture: ComponentFixture<CrudPaymentLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPaymentLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPaymentLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
