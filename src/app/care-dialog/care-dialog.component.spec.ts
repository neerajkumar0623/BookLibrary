import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareDialogComponent } from './care-dialog.component';

describe('CareDialogComponent', () => {
  let component: CareDialogComponent;
  let fixture: ComponentFixture<CareDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
