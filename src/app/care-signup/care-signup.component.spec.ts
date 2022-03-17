import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareSignupComponent } from './care-signup.component';

describe('CareSignupComponent', () => {
  let component: CareSignupComponent;
  let fixture: ComponentFixture<CareSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
