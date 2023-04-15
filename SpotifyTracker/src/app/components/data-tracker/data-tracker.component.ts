import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-tracker',
  templateUrl: './data-tracker.component.html',
  styleUrls: ['./data-tracker.component.scss']
})
export class DataTrackerComponent implements OnInit {

  data_ = {"Song" : {"Date:": 1, "length:": 2}};

  constructor() { }

  ngOnInit(): void {
    
  }

  data(): string {
    return JSON.stringify(this.data_);
  }
}
