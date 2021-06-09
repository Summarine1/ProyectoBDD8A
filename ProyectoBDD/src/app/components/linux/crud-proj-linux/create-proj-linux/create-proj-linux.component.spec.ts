import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjLinuxComponent } from './create-proj-linux.component';

describe('CreateProjLinuxComponent', () => {
  let component: CreateProjLinuxComponent;
  let fixture: ComponentFixture<CreateProjLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
