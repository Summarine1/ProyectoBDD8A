import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProjWindowsComponent } from './crud-proj-windows.component';

describe('CrudProjWindowsComponent', () => {
  let component: CrudProjWindowsComponent;
  let fixture: ComponentFixture<CrudProjWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProjWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProjWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
