import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAssignWindowsComponent } from './crud-assign-windows.component';

describe('CrudAssignWindowsComponent', () => {
  let component: CrudAssignWindowsComponent;
  let fixture: ComponentFixture<CrudAssignWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAssignWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAssignWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
