import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAsgWindowsComponent } from './create-asg-windows.component';

describe('CreateAsgWindowsComponent', () => {
  let component: CreateAsgWindowsComponent;
  let fixture: ComponentFixture<CreateAsgWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAsgWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAsgWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
