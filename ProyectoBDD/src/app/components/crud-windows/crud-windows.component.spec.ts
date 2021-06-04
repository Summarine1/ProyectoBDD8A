import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudWindowsComponent } from './crud-windows.component';

describe('CrudWindowsComponent', () => {
  let component: CrudWindowsComponent;
  let fixture: ComponentFixture<CrudWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
