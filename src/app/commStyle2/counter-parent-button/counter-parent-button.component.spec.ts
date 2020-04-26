import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterParentButtonComponent } from './counter-parent-button.component';

describe('CounterParentButtonComponent', () => {
  let component: CounterParentButtonComponent;
  let fixture: ComponentFixture<CounterParentButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterParentButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterParentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
