import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent implements OnInit {

  progressBlue: number = 50;
  progressGreen: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  updateProgress(event:number){
    this.progressBlue = event;

  }

}
