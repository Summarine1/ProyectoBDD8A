import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsgLinuxComponent } from './list-asg-linux.component';

describe('ListAsgLinuxComponent', () => {
  let component: ListAsgLinuxComponent;
  let fixture: ComponentFixture<ListAsgLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAsgLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAsgLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
