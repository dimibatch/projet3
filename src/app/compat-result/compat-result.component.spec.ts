import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompatResultComponent } from './compat-result.component';

describe('CompatResultComponent', () => {
  let component: CompatResultComponent;
  let fixture: ComponentFixture<CompatResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompatResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompatResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
