import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() percentsObs: Subject<number>;
  private percents: number;
  private rotationRule: string;

  constructor() { }

  ngOnInit() {
    this.percentsObs.subscribe((percents) => {
      this.percents = percents;
      this.rotationRule = 'rotate(' + ((360 * percents / 100)).toString() + 'deg)';
    });
  }
}
