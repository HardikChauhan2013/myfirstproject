import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSliderComponent } from './counter-slider.component';

describe('CounterSliderComponent', () => {
  let component: CounterSliderComponent;
  let fixture: ComponentFixture<CounterSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
