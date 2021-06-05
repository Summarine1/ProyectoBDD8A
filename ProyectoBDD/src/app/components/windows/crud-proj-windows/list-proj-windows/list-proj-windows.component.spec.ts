import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjWindowsComponent } from './list-proj-windows.component';

describe('ListProjWindowsComponent', () => {
  let component: ListProjWindowsComponent;
  let fixture: ComponentFixture<ListProjWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProjWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
