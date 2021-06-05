import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePayWindowsComponent } from './update-pay-windows.component';

describe('UpdatePayWindowsComponent', () => {
  let component: UpdatePayWindowsComponent;
  let fixture: ComponentFixture<UpdatePayWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePayWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePayWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
