import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingtestresultComponent } from './ongoingtestresult.component';

describe('OngoingtestresultComponent', () => {
  let component: OngoingtestresultComponent;
  let fixture: ComponentFixture<OngoingtestresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingtestresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingtestresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
