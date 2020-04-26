import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterChildInputComponent } from './counter-child-input.component';

describe('CounterChildInputComponent', () => {
  let component: CounterChildInputComponent;
  let fixture: ComponentFixture<CounterChildInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterChildInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterChildInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
