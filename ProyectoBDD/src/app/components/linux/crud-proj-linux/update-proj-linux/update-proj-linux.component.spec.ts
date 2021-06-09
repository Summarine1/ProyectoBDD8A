import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjLinuxComponent } from './update-proj-linux.component';

describe('UpdateProjLinuxComponent', () => {
  let component: UpdateProjLinuxComponent;
  let fixture: ComponentFixture<UpdateProjLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProjLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProjLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
