import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Segment } from './segment';
import { FilterBase } from './filters/filterBase';
import { InBetweenFilter } from './filters/inbetween-filter/inBetweenFilter';

@Component({
  selector: 'dynamic-segment-filter',
  templateUrl: './dynamic-segment-filter.component.html',
  styleUrls: ['./dynamic-segment-filter.component.scss']
})
export class DynamicSegmentFilterComponent implements OnInit {

  @Input() rootSegment: Segment;
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.createSegmentGroup(this.rootSegment);
    this.form.setValue(this.rootSegment);
  }

  createSegmentGroup(segment: Segment) : FormGroup {
    const filters = segment.filters.map(filter => this.createFilterGroup(filter));
    const segments = segment.segments.map(childSegment => this.createSegmentGroup(childSegment));
    const group = this.fb.group({
      id: [segment.id],
      name: [segment.name],
      segmentType: [segment.segmentType],
      hidden: [segment.hidden],
      filters: this.fb.array(filters),
      segments: this.fb.array(segments)
    });
    return group;
  }

  createFilterGroup(filter: FilterBase) : FormGroup {
    const group = this.fb.group({
      id: [filter.id],
      filterType:[filter.filterType],
      regionId:[filter.regionId]
    });
    switch(filter.filterType)
    {
      case "IN_BETWEEN":
        const inBetweenFilter = (filter as InBetweenFilter);
        group.addControl('from', this.fb.control({value:inBetweenFilter.from}));
        group.addControl('to', this.fb.control({value:inBetweenFilter.to}));
        break;
      case "UNTIL":
        group.addControl('until', this.fb.control({value:''}))
        break;
      default:
        throw new Error(`Unrecognised filter type (${filter.filterType})`)
    }
    return group;
  }

}
