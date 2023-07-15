import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSidenavComponent } from './button-sidenav.component';

describe('ButtonSidenavComponent', () => {
  let component: ButtonSidenavComponent;
  let fixture: ComponentFixture<ButtonSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSidenavComponent]
    });
    fixture = TestBed.createComponent(ButtonSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
