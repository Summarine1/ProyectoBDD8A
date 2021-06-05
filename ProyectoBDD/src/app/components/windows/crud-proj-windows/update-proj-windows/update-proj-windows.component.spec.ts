import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjWindowsComponent } from './update-proj-windows.component';

describe('UpdateProjWindowsComponent', () => {
  let component: UpdateProjWindowsComponent;
  let fixture: ComponentFixture<UpdateProjWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProjWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProjWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
