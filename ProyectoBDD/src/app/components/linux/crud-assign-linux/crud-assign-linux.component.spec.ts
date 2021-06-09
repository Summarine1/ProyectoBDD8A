import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAssignLinuxComponent } from './crud-assign-linux.component';

describe('CrudAssignLinuxComponent', () => {
  let component: CrudAssignLinuxComponent;
  let fixture: ComponentFixture<CrudAssignLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAssignLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAssignLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
