import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss']
})
export class SegmentComponent {
  @Input()
  group: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

  }

  addSegment() {
    const group = this.fb.group({
      id: [''],
      name: [''],
      segmentType: [''],
      hidden: [false],
      filters: this.fb.array([]),
      segments: this.fb.array([])
    });
    this.segments.push(group);
  }

  addFilter() {
    const group = this.fb.group({
      id: [''],
      filterType:['IN_BETWEEN'],
      regionId:[''],
      from: ['', Validators.required],
      to: ['', Validators.required]
    });
    this.filters.push(group);
  }

  deleteSegment() {
    const parentSegments = this.group.parent as FormArray;
    parentSegments.removeAt(parentSegments.controls.findIndex(x => (x as FormGroup) === this.group));
  }

  deleteFilter(index)
  {
    this.filters.removeAt(index);
  }

  get segments() {
    return (this.group.get('segments') as FormArray);
  }

  get filters() {
    return (this.group.get('filters') as FormArray);
  }

  getSegmentGroup(index) {
    return (this.group.get('segments') as FormArray).controls[index];
  }

  getFilterGroup(index) {
    return (this.group.get('filters') as FormArray).controls[index];
  }
}
