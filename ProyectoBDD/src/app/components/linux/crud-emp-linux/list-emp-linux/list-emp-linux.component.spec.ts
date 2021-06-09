import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpLinuxComponent } from './list-emp-linux.component';

describe('ListEmpLinuxComponent', () => {
  let component: ListEmpLinuxComponent;
  let fixture: ComponentFixture<ListEmpLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmpLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
