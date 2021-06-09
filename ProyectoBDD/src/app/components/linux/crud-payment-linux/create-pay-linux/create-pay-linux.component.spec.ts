import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayLinuxComponent } from './create-pay-linux.component';

describe('CreatePayLinuxComponent', () => {
  let component: CreatePayLinuxComponent;
  let fixture: ComponentFixture<CreatePayLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePayLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePayLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
