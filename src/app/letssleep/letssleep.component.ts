import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-letssleep',
  templateUrl: './letssleep.component.html',
  styleUrls: ['./letssleep.component.css']
})
export class LetsSleepComponent implements OnInit {

  private matchName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.matchName = params['name'];
    });
  }

}
