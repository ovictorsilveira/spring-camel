import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFieldMessangesComponent } from './error-field-messanges.component';

describe('ErrorFieldMessangesComponent', () => {
  let component: ErrorFieldMessangesComponent;
  let fixture: ComponentFixture<ErrorFieldMessangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorFieldMessangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFieldMessangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
