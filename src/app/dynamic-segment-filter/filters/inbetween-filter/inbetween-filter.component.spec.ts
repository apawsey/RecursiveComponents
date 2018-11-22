import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbetweenFilterComponent } from './inbetween-filter.component';

describe('InbetweenFilterComponent', () => {
  let component: InbetweenFilterComponent;
  let fixture: ComponentFixture<InbetweenFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbetweenFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbetweenFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
