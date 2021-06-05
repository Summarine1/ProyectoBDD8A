import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPayWindowsComponent } from './list-pay-windows.component';

describe('ListPayWindowsComponent', () => {
  let component: ListPayWindowsComponent;
  let fixture: ComponentFixture<ListPayWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPayWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPayWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
