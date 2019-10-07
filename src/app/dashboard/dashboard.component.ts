import { Component } from '@angular/core';

import * as shape from 'd3-shape';
import * as d3 from 'd3';
import { colorSets } from '@swimlane/ngx-charts/release/utils/color-sets';
import {
  single,
  multi,
  bubble,
  generateData,
  generateGraph,
  colors
} from '../core';

const monthName = new Intl.DateTimeFormat('en-us', { month: 'short' });
const weekdayName = new Intl.DateTimeFormat('en-us', { weekday: 'short' });

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  single: any[];
  multi: any[];
  dateData: any[];
  dateDataWithRange: any[];
  graph: { links: any[]; nodes: any[] };
  range = false;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  tooltipDisabled = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  innerPadding = 0;
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;

  // line interpolation
  curve = shape.curveBasis;

  // pie
  showLabels = true;
  explodeSlices = true;
  doughnut = false;
  arcWidth = 0.25;

  colorScheme = {
    domain: colors
  };

  schemeType = 'ordinal';
  rangeFillOpacity = 0.15;

  // line, area
  autoScale = true;
  timeline = false;

  constructor() {
    Object.assign(this, {
      single,
      graph: generateGraph(50),
      multi
    });

    this.dateData = generateData(2, false);
    this.dateDataWithRange = generateData(2, true);
  }

  get dateDataWithOrWithoutRange() {
    if (this.range) {
      return this.dateDataWithRange;
    } else {
      return this.dateData;
    }
  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }
}
