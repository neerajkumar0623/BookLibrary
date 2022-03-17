import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCareComponent } from './book-care.component';

describe('BookCareComponent', () => {
  let component: BookCareComponent;
  let fixture: ComponentFixture<BookCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
