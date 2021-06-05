import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjWindowsComponent } from './create-proj-windows.component';

describe('CreateProjWindowsComponent', () => {
  let component: CreateProjWindowsComponent;
  let fixture: ComponentFixture<CreateProjWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
