import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareLoginComponent } from './care-login.component';

describe('CareLoginComponent', () => {
  let component: CareLoginComponent;
  let fixture: ComponentFixture<CareLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
