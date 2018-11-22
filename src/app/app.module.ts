import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SegmentComponent } from './dynamic-segment-filter/segment/segment.component'
import { DynamicSegmentFilterComponent } from './dynamic-segment-filter/dynamic-segment-filter.component';
import { InbetweenFilterComponent } from './dynamic-segment-filter/filters/inbetween-filter/inbetween-filter.component';
import { DynamicFilterItemDirective } from './dynamic-segment-filter/filters/dynamic-filter-item.directive';
import { UntilFilterComponent } from './dynamic-segment-filter/filters/until-filter/until-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SegmentComponent,
    DynamicSegmentFilterComponent,
    InbetweenFilterComponent,
    DynamicFilterItemDirective,
    UntilFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  entryComponents: [
    InbetweenFilterComponent,
    UntilFilterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
