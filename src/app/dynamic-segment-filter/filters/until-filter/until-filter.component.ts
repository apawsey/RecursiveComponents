import { Component, OnInit } from '@angular/core';
import { UntilFilter } from './untilFilter';
import { FilterItem } from '../filterItem';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-until-filter',
  templateUrl: './until-filter.component.html',
  styleUrls: ['./until-filter.component.scss']
})
export class UntilFilterComponent implements FilterItem<UntilFilter> {

  group: FormGroup;
  filter: UntilFilter;
}
