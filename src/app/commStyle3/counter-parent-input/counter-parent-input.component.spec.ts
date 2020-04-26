import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterParentInputComponent } from './counter-parent-input.component';

describe('CounterParentInputComponent', () => {
  let component: CounterParentInputComponent;
  let fixture: ComponentFixture<CounterParentInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterParentInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterParentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
