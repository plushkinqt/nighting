import {
    Component,
    OnInit,
    Input,
    OnChanges
} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() percentsObs: Subject<number>;
  private percents: number;
  private rotationRule: string;

  constructor() { }

  ngOnInit() {
    this.percentsObs.subscribe((percents) => {
      this.percents = percents;
      console.log('Persents', this.percents);
      this.rotationRule =
          'rotate(' + ((360 * percents / 100)).toString() + 'deg)';
      console.log('Rotation', this.rotationRule);
    });
  }

  ngOnChanges(changes: any) {
    // console.log(' percents state', changes.percents);
    // console.log(' rotation state', changes.rotationRule);

    // if (changes.percents && changes.percents.currentValue) {
    //   console.log('State changed 2', changes);
    //   let deg = 360 * changes.percents.currentValue / 100;
    //   // this.rotationRule = 'rotate('+ deg +'deg)';
    // }
  }
}
