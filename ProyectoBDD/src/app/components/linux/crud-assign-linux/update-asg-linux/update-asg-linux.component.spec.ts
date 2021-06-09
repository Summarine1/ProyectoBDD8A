import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAsgLinuxComponent } from './update-asg-linux.component';

describe('UpdateAsgLinuxComponent', () => {
  let component: UpdateAsgLinuxComponent;
  let fixture: ComponentFixture<UpdateAsgLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAsgLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAsgLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
