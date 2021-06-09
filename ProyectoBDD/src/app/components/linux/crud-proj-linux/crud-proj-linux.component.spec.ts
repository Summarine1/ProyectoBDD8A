import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProjLinuxComponent } from './crud-proj-linux.component';

describe('CrudProjLinuxComponent', () => {
  let component: CrudProjLinuxComponent;
  let fixture: ComponentFixture<CrudProjLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProjLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProjLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
