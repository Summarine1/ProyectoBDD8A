import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPayLinuxComponent } from './list-pay-linux.component';

describe('ListPayLinuxComponent', () => {
  let component: ListPayLinuxComponent;
  let fixture: ComponentFixture<ListPayLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPayLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPayLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
