import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterChildButtonComponent } from './counter-child-button.component';

describe('CounterChildButtonComponent', () => {
  let component: CounterChildButtonComponent;
  let fixture: ComponentFixture<CounterChildButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterChildButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterChildButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
