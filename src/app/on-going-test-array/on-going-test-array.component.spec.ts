import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingTestArrayComponent } from './on-going-test-array.component';

describe('OnGoingTestArrayComponent', () => {
  let component: OnGoingTestArrayComponent;
  let fixture: ComponentFixture<OnGoingTestArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnGoingTestArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnGoingTestArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
