import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAsgWindowsComponent } from './update-asg-windows.component';

describe('UpdateAsgWindowsComponent', () => {
  let component: UpdateAsgWindowsComponent;
  let fixture: ComponentFixture<UpdateAsgWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAsgWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAsgWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
