import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEmpLinuxComponent } from './crud-emp-linux.component';

describe('CrudEmpLinuxComponent', () => {
  let component: CrudEmpLinuxComponent;
  let fixture: ComponentFixture<CrudEmpLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEmpLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEmpLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
