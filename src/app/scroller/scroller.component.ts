import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public acceptMatch() {
    console.log('Match accepted!');
  }

  public nextMatch() {
    console.log('Fetching next match...');
  }

}
