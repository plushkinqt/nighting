import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() percents: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
