import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpLinuxComponent } from './create-emp-linux.component';

describe('CreateEmpLinuxComponent', () => {
  let component: CreateEmpLinuxComponent;
  let fixture: ComponentFixture<CreateEmpLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmpLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
