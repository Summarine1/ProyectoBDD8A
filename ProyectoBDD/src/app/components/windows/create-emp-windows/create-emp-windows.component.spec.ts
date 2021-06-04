import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpWindowsComponent } from './create-emp-windows.component';

describe('CreateEmpWindowsComponent', () => {
  let component: CreateEmpWindowsComponent;
  let fixture: ComponentFixture<CreateEmpWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmpWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
