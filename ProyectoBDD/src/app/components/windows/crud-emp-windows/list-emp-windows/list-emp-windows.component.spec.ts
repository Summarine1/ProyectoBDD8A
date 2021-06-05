import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpWindowsComponent } from './list-emp-windows.component';

describe('ListEmpWindowsComponent', () => {
  let component: ListEmpWindowsComponent;
  let fixture: ComponentFixture<ListEmpWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmpWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
