import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpWindowsComponent } from './update-emp-windows.component';

describe('UpdateEmpWindowsComponent', () => {
  let component: UpdateEmpWindowsComponent;
  let fixture: ComponentFixture<UpdateEmpWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmpWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
