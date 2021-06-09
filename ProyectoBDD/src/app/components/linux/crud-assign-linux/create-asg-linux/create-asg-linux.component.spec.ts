import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAsgLinuxComponent } from './create-asg-linux.component';

describe('CreateAsgLinuxComponent', () => {
  let component: CreateAsgLinuxComponent;
  let fixture: ComponentFixture<CreateAsgLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAsgLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAsgLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
