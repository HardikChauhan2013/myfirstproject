import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwobindingdemoComponent } from './twobindingdemo.component';

describe('TwobindingdemoComponent', () => {
  let component: TwobindingdemoComponent;
  let fixture: ComponentFixture<TwobindingdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwobindingdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwobindingdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
