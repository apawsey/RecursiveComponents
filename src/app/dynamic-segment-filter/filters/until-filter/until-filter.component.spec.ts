import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UntilFilterComponent } from './until-filter.component';

describe('UntilFilterComponent', () => {
  let component: UntilFilterComponent;
  let fixture: ComponentFixture<UntilFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UntilFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UntilFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
