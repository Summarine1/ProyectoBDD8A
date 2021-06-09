import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePayLinuxComponent } from './update-pay-linux.component';

describe('UpdatePayLinuxComponent', () => {
  let component: UpdatePayLinuxComponent;
  let fixture: ComponentFixture<UpdatePayLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePayLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePayLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
