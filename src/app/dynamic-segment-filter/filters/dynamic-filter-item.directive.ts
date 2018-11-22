import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UntilFilterComponent } from './until-filter/until-filter.component';
import { InbetweenFilterComponent } from './inbetween-filter/inbetween-filter.component';

import { FilterBase } from './filterBase';
import { FilterItem } from './filterItem';

const components: {[type: string]: Type<FilterItem<FilterBase>>} = {
  UNTIL: UntilFilterComponent,
  IN_BETWEEN: InbetweenFilterComponent
};

@Directive({
  selector: '[dynamicFilterItem]'
})
export class DynamicFilterItemDirective implements OnChanges, OnInit {

  @Input()
  public group: FormGroup;

  public component: ComponentRef<FilterItem<FilterBase>>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnChanges() {
    if (this.component){
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    const filterType = this.group.get('filterType').value;
    if (!components[filterType]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Created with unsupported type (${filterType}). Supportedd types: ${supportedTypes}.`
      )
    }
    const component = this.resolver.resolveComponentFactory<FilterItem<FilterBase>>(components[filterType]);
    this.component = this.container.createComponent(component);
    this.component.instance.group = this.group;
  }
}
