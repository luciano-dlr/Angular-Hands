import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogleDrawerComponent } from './togle-drawer.component';

describe('TogleDrawerComponent', () => {
  let component: TogleDrawerComponent;
  let fixture: ComponentFixture<TogleDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TogleDrawerComponent]
    });
    fixture = TestBed.createComponent(TogleDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
