import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEmpWindowsComponent } from './crud-emp-windows.component';

describe('CrudEmpWindowsComponent', () => {
  let component: CrudEmpWindowsComponent;
  let fixture: ComponentFixture<CrudEmpWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEmpWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEmpWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
