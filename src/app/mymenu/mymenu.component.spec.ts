import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymenuComponent } from './mymenu.component';

describe('MymenuComponent', () => {
  let component: MymenuComponent;
  let fixture: ComponentFixture<MymenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
