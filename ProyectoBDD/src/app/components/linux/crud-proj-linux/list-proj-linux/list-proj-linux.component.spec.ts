import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjLinuxComponent } from './list-proj-linux.component';

describe('ListProjLinuxComponent', () => {
  let component: ListProjLinuxComponent;
  let fixture: ComponentFixture<ListProjLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProjLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
