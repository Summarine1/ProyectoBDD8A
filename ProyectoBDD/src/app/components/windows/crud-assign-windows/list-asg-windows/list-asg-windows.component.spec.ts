import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsgWindowsComponent } from './list-asg-windows.component';

describe('ListAsgWindowsComponent', () => {
  let component: ListAsgWindowsComponent;
  let fixture: ComponentFixture<ListAsgWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAsgWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAsgWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
