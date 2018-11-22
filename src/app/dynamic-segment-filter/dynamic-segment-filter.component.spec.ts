import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSegmentFilterComponent } from './dynamic-segment-filter.component';

describe('DynamicSegmentFilterComponent', () => {
  let component: DynamicSegmentFilterComponent;
  let fixture: ComponentFixture<DynamicSegmentFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicSegmentFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSegmentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
