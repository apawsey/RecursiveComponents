import { Component, OnInit } from '@angular/core';
import { FilterItem } from '../filterItem';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InBetweenFilter } from './inBetweenFilter';

@Component({
  selector: 'inbetween-filter',
  templateUrl: './inbetween-filter.component.html',
  styleUrls: ['./inbetween-filter.component.scss']
})
export class InbetweenFilterComponent implements FilterItem<InBetweenFilter>, OnInit {

  group: FormGroup;
  filter: InBetweenFilter;

  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {

  }
}
