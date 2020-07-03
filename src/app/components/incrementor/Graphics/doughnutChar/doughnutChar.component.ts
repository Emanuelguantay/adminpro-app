import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnutChar',
  templateUrl: './doughnutChar.component.html'
})
export class DoughnutCharComponent implements OnInit {

  @Input() doughnutChartLabels: Label[];
  @Input() doughnutChartData: MultiDataSet;
  @Input() doughnutChartType: ChartType;

  constructor() { 
  }

  ngOnInit(): void {
  }
}