import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLinuxComponent } from './crud-linux.component';

describe('CrudLinuxComponent', () => {
  let component: CrudLinuxComponent;
  let fixture: ComponentFixture<CrudLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
