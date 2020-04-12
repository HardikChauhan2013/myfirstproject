import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedemoComponent } from './reactivedemo.component';

describe('ReactivedemoComponent', () => {
  let component: ReactivedemoComponent;
  let fixture: ComponentFixture<ReactivedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
