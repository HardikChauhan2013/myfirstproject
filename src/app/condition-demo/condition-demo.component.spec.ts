import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionDemoComponent } from './condition-demo.component';

describe('ConditionDemoComponent', () => {
  let component: ConditionDemoComponent;
  let fixture: ComponentFixture<ConditionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
