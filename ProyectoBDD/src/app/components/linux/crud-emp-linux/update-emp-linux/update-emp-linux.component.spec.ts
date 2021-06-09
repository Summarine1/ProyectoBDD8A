import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpLinuxComponent } from './update-emp-linux.component';

describe('UpdateEmpLinuxComponent', () => {
  let component: UpdateEmpLinuxComponent;
  let fixture: ComponentFixture<UpdateEmpLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmpLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
